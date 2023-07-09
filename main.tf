provider "aws" {
  region = "eu-west-2" #London
}
resource "aws_s3_bucket" "wordle_two_bucket" {
  bucket = "wordle-two-bucket"  # Replace with your desired bucket name
}

resource "aws_s3_bucket_policy" "wordle_two_bucket_policy" {
  bucket = aws_s3_bucket.wordle_two_bucket.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::wordle-two-bucket/*"
    }
  ]
}
EOF
}
