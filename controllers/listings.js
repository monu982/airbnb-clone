const Listing = require("../models/listing");
// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  console.log(req.user);
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  // for image upload
  let url = req.file.path;
  let filename = req.file.filename;
  let location_name = req.body.listing.location;
  // This api will return the location_name coordinates
  let response = await geocoderApi.forwardGeocode(location_name);

  const newlisting = new Listing(req.body.listing);
  newlisting.owner = req.user._id;
  newlisting.image = { url, filename };
  // for send the coordinates in database
  newlisting.geometry = response.geometry;

  let saveListing = await newlisting.save();
  console.log(saveListing);
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace(
    "/upload",
    "/upload/h_200,w_200/e_blur:100"
  );
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file != "undefined") {
    let filename = req.file.filename;
    let url = req.file.path;
    listing.image = { filename, url };
    await listing.save();
  }
  req.flash("success", "Listing Updated !!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  let img_url = deletedListing.image.url;
  let match = img_url.match(/upload\/(?:v\d+\/)?(.+)\.\w+$/);
  if (match) {
    match = match[1]; // Output: wanderlust_DEV/mo2ezuat0zi1nsh28qyi
  } else {
    console.log("No match found");
  }
  let img_name = match;
  deleteImage(img_name);
  req.flash("error", "Listing Deleted !!");
  res.redirect("/listings");
};

const geocoderApi = {
  forwardGeocode: async (query) => {
    const features = [];
    try {
      const request = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        query
      )}&format=geojson&polygon_geojson=1&addressdetails=1`;
      console.log(request);
      const response = await fetch(request);
      const geojson = await response.json();
      let i = 1;
      for (const feature of geojson.features) {
        if (i < 1) {
          break;
        }
        const center = [
          // this is for finding the center point of coordinates
          feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
          feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2,
        ];
        const point = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: center,
          },
          center,
        };
        features.push(point);
      }
    } catch (e) {
      console.error(`Failed to forwardGeocode with error: ${e}`);
      return null;
    }
    return features[0];
  },
};
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "your-cloud-name",
  api_key: "your-api-key",
  api_secret: "your-api-secret",
});

const deleteImage = async (publicId) => {
  try {
    console.log(`Attempting to delete image with public ID: ${publicId}`);
    const result = await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};
