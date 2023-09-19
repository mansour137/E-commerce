const catchAsync = require('../utilis/catchAsync');
const AppError = require('../utilis/appError');


exports.getAllOrOne= (model) => catchAsync(async (req,res,next)=>{
    if(req.params.id){
        const doc = await model.findById(req.params.id);
        res.status(201).json({
            status: 'success',
            data: {
                doc
            }
        });
    }
    const doc = await model.find();
    res.status(201).json({
        status: 'success',
        data: {
            doc
        }
    });
})
exports.creatNewOne= (model) => catchAsync(async (req,res,next)=>{
    const doc = await model.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            doc
        }
    });
})
exports.update = (model) => catchAsync(async (req,res,next)=>{
    const doc = await model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
        status: 'Updated successfully',
        data: {
            doc
        }
    });
})
exports.delete = (model) => catchAsync(async (req,res,next)=>{
    const doc = await model.findByIdAndDelete(req.params.id);

    if (!doc) {
        return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
})

exports.deleteAll = () => catchAsync(async (req,res,next)=>{
    res.status(204).json({
        status: 'success, deleted cart',
        data: null
    });
})