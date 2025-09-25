# terraform/variables.tf
variable "db_password" {
  description = "RDS のパスワード"
  type        = string
  sensitive   = true
}