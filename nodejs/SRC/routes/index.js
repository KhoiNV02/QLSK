//trang điều phối chung đến các trang 
const newsRouter = require('./views');
const sitesRouter = require('./site');
const detailRouter = require('./detail');
const meRouter = require('./me');
const thuongRouter=require('./thuong');
const CapNhatRouter=require('./CapNhat');
const loginRouter=require('./login');
const UPSKRounter=require('./UPSK');
const UPDSSVRounter=require('./UPDSSV');
const SKTieuBieuRounter=require('./SKTieuBieu');
const MoXetRounter=require("./MoXet");
const CheckCCRounter=require("./CheckCC");
const CCDetailRounter=require("./CCDetail");
function route(app) {
    app.use("/CCDetail",CCDetailRounter);
    app.use("/CheckCC",CheckCCRounter);
    app.use('/xet', MoXetRounter);
    app.use('/skTieuBieu', SKTieuBieuRounter);
    app.use('/upDSSV', UPDSSVRounter);
    app.use('/upSK', UPSKRounter);
    app.use('/views', newsRouter);
    app.use('/me', meRouter);
    app.use('/detail', detailRouter);
    app.use('/thuong', thuongRouter);
    app.use('/CapNhat', CapNhatRouter);
    app.use('/home', sitesRouter);
    app.use('/', loginRouter);
}
module.exports = route;
