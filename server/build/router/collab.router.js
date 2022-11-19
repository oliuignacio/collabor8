"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var collab_1 = __importDefault(require("../controllers/collab"));
var auth_1 = __importDefault(require("../middlewares/auth"));
var router = (0, express_1.Router)();
router.post("/newCollab", auth_1.default, collab_1.default.create);
router.get("/getAll", collab_1.default.getAll);
router.get("/getUserCollabs/:id", collab_1.default.getUserCollabs);
router.get("/id/:id", collab_1.default.getCollab);
router.delete("/delete/:cid", auth_1.default, collab_1.default.deleteCollab);
router.put("/id/:id/acceptTrack", collab_1.default.acceptTrack);
router.delete("/id/:id/denyTrack", auth_1.default, collab_1.default.denyTrack);
router.delete("/id/:id/deleteTrack", auth_1.default, collab_1.default.deleteTrack);
router.post("/saveTrack", auth_1.default, collab_1.default.saveTrack);
router.put("/id/:id/saveSettings", collab_1.default.saveSettings);
exports.default = router;