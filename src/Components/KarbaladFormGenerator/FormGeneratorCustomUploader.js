import React, { useState } from 'react';

import { message, Upload } from 'antd';
import Compress from 'compress.js';

const UploadSvg = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M22,17v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17a1,1,0,0,0-1-1h0A1,1,0,0,0,22,17Z"/><path d="M18.707,5.462,14.121.875a3.007,3.007,0,0,0-4.242,0L5.293,5.462A1,1,0,1,0,6.707,6.876L11,2.584V18a1,1,0,0,0,2,0V2.583l4.293,4.293a1,1,0,1,0,1.414-1.414Z"/></svg>


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}


const compress = new Compress();

const FormGeneratorCustomUploader = props => {

    const [loading, setLoading] = useState(false);

    const [imageUrl, setImageUrl] = useState(false);
    const [uploadedFileName, setUploadedFileName] = useState('');


    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setUploadedFileName(info.file.name);
                setImageUrl(imageUrl);
                setLoading(false);

            }
            );
        }
    };


	function beforeUpload(file) {
	
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) {
			message.error('فایل تصویر باید با فرمت JPG یا PNG باشد!');
			return false
		}
		
		compress.compress([file], {
			size: 2, // the max size in MB, defaults to 2MB
			quality: 0.80, // the quality of the image, max is 1,
			maxWidth: 1000, // the max width of the output image, defaults to 1920px
			maxHeight: 5000, // the max height of the output image, defaults to 1920px
			resize: true, // defaults to true, set false if you do not want to resize the image width and height
		}).then((data) => {
		// returns an array of compressed images
			props.dynamicFill(data[0].prefix + data[0].data, props.formName)
		}).catch(err => {
			
		})





		return true;
	}
	
	



    const uploadButton = (
        <div>
            {/* {loading ? <LoadingOutlined /> : <PlusOutlined /> } */}
            <div className="svgContainer">
                <UploadSvg />
            </div>
            <div className="ant-upload-text">آپلود</div>
        </div>
    );

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    return (
        <Upload
            name={props.formName}
            listType="picture-card formGeneratorCustomUploader"
            className={props.className}
            showUploadList={false}
            customRequest={dummyRequest}
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {imageUrl ? <div className="afterUploadContainer">
                <p>{uploadedFileName}</p>
                <a target="_blank" rel="noreferrer" href={imageUrl}>
                    <img src={imageUrl} alt="uploadedFileImage" />
                </a>
            </div> : uploadButton}
            {imageUrl ? <input name={props.formName} type='hidden' value={imageUrl} /> : ''}
        </Upload>
    );
};

export default FormGeneratorCustomUploader;