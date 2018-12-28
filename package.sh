npm install
tar -czvf helloopsworks-backend.tgz node_modules index.js package.json package-lock.json

aws s3 cp helloopsworks-backend.tgz s3://${AWS_BUCKET}/helloopsworks-backend.tgz
