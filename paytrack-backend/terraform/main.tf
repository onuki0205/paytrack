resource "aws_lambda_function" "api_handler" {
  function_name = "paytrack-api-handler"
  runtime       = "nodejs18.x"
  handler       = "index.handler"
  role          = aws_iam_role.lambda_exec.arn
  filename      = "lambda.zip"
}

resource "aws_api_gateway_rest_api" "api" {
  name = "paytrack-api"
}

resource "aws_db_instance" "rds" {
  identifier         = "paytrack-db"
  engine             = "postgres"
  instance_class     = "db.t3.micro"
  allocated_storage  = 20
  username           = "admin"
  password           = var.db_password
}