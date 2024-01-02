import * as express from "express";
import * as multer from "multer";

class UploadImage {
    upload(fieldName: string) {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'src/uploads');
            },
            filename: (req, file, cb) => {
                cb(null, `${fieldName}-${Date.now()}.png`);
            }
        });

        const uploadFile = multer({ storage }).single(fieldName);

        return (req: express.Request, res: express.Response, next: express.NextFunction) => {
            uploadFile(req, res, (err: any) => {
                if (err) {
                    console.error(err);
                    return res.status(400).json({
                        message: "File upload failed",
                        error: err.message
                    });
                }

                if (!req.file) {
                    return res.status(400).json({
                        message: "No file provided"
                    });
                }

                res.locals.filename = req.file.filename;
                next();
            });
        };
    }
}

export default new UploadImage();
