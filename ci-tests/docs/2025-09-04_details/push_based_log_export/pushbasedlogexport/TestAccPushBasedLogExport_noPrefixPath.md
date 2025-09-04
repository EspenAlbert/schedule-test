# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_noPrefixPath Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-13 00:33](#error-2025-08-13t0033010000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/689bdc4c230cf52517c7ab98/cloudProviderAccess/689bdd44230cf52517ca7f44 | dev | 23.01s
[2025-08-27 00:28](#error-2025-08-27t0028220000) |  | dev | 15.01s
[2025-09-01 00:30](#error-2025-09-01t0030260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 54 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 55 seconds
- 2025-08-09 PASS 53 seconds
- 2025-08-10 PASS 52 seconds
- 2025-08-11 PASS 57 seconds
- 2025-08-12 PASS 57 seconds
- 2025-08-13

### Error 2025-08-13T00:33:01+00:00
```
2025-08-13T00:33:01.2563862Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2025-08-13T00:33:09.1399330Z 2025/08/13 00:33:09 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/689bdc4c230cf52517c7ab98/cloudProviderAccess/689bdd44230cf52517ca7f44 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5672124024108707446-policy). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5672124024108707446-policy], BadRequestDetail:  
2025-08-13T00:33:09.1401755Z 2025/08/13 00:33:09 retrying
2025-08-13T00:33:19.7876116Z    test_terraform_path=/home/runner/work/_temp/c7119518-5b95-4d9d-bef0-dd6f001b280e/terraform test_name=TestAccPushBasedLogExport_noPrefixPath
2025-08-13T00:33:19.7877990Z     resource_test.go:67: Step 1/1 error: Error running apply: exit status 1
2025-08-13T00:33:19.7878771Z         
2025-08-13T00:33:19.7879516Z         Error: Error when creating push-based log export configuration
2025-08-13T00:33:19.7880153Z         
2025-08-13T00:33:19.7880794Z           with mongodbatlas_push_based_log_export.test,
2025-08-13T00:33:19.7882070Z           on terraform_plugin_test.tf line 146, in resource "mongodbatlas_push_based_log_export" "test":
2025-08-13T00:33:19.7883488Z          146: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-08-13T00:33:19.7884046Z         
2025-08-13T00:33:19.7885055Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689bdc4c230cf52517c7ab98/pushBasedLogExport
2025-08-13T00:33:19.7886341Z         POST: HTTP 400 Bad Request (Error code: "IAM_ROLE_CANNOT_WRITE_TO_S3_BUCKET")
2025-08-13T00:33:19.7889996Z         Detail: The IAM role cannot write to the S3 bucket. Reason: Bad Request.
2025-08-13T00:33:19.7890712Z         Params:
2025-08-13T00:33:19.7891664Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5672124024108707446-policy
2025-08-13T00:33:19.7892833Z         mongodb-atlas-tf-9axmcdmfl1-1 Problem retrieving bucket location:
2025-08-13T00:33:19.7893661Z         mongodb-atlas-tf-9axmcdmfl1-1: User:
2025-08-13T00:33:19.7895336Z         arn:aws:sts::358363220050:assumed-role/mongodb-atlas-test-acc-tf-5672124024108707446-policy/MONGODB_CLOUD_PROVIDER_ACCESS_689bdd4f230cf52517ca7f60
2025-08-13T00:33:19.7896770Z         is not authorized to perform: s3:PutObject on resource:
2025-08-13T00:33:19.7897887Z         "arn:aws:s3:::mongodb-atlas-tf-9axmcdmfl1-1/atlas-test" because no
2025-08-13T00:33:19.7898971Z         identity-based policy allows the s3:PutObject action]], BadRequestDetail: 
2025-08-13T00:33:24.3900939Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (23.13s)
```

- 2025-08-14 PASS 52 seconds
- 2025-08-15 PASS 54 seconds
- 2025-08-16 PASS 51 seconds
- 2025-08-17 PASS 57 seconds
- 2025-08-18 PASS 55 seconds
- 2025-08-19 PASS 56 seconds
- 2025-08-20
  - PASS 56 seconds
  - PASS 51 seconds
- 2025-08-21 PASS 55 seconds
- 2025-08-22 PASS 51 seconds
- 2025-08-23 PASS 51 seconds
- 2025-08-24 PASS 50 seconds
- 2025-08-25 PASS 52 seconds
- 2025-08-26 PASS 50 seconds
- 2025-08-27

### Error 2025-08-27T00:28:22+00:00
```
2025-08-27T00:28:22.5744698Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2025-08-27T00:28:32.2810345Z   
2025-08-27T00:28:32.2811005Z     resource_test.go:67: Step 1/1 error: Error running apply: exit status 1
2025-08-27T00:28:32.2811583Z         
2025-08-27T00:28:32.2813118Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-1154138619247495023-policy): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T00:28:32.2814488Z         	status code: 409, request id: 57f4010a-1996-4553-8841-ed349ff19589
2025-08-27T00:28:32.2814984Z         
2025-08-27T00:28:32.2816158Z           with aws_iam_role.test_role,
2025-08-27T00:28:32.2816987Z           on terraform_plugin_test.tf line 60, in resource "aws_iam_role" "test_role":
2025-08-27T00:28:32.2817574Z           60: resource "aws_iam_role" "test_role" {
2025-08-27T00:28:32.2817855Z         
2025-08-27T00:28:37.7167388Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (15.14s)
```

- 2025-08-28 PASS 51 seconds
- 2025-08-29 PASS 52 seconds
- 2025-08-30 PASS 50 seconds
- 2025-08-31 PASS 50 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:26+00:00
```
2025-09-01T00:30:26.7855343Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2025-09-01T00:30:26.7855889Z     resource_test.go:67: Creating execution project: test-acc-tf-p-9223341530993986813
2025-09-01T00:30:26.9644880Z     resource_test.go:67: 
2025-09-01T00:30:26.9646420Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:26.9649680Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:26.9652202Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:74
2025-09-01T00:30:26.9654450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:67
2025-09-01T00:30:26.9655359Z         	Error:      	Received unexpected error:
2025-09-01T00:30:26.9658506Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:26.9661038Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2025-09-01T00:30:26.9665321Z         	Messages:   	Project creation failed: test-acc-tf-p-9223341530993986813, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:26.9667856Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (0.18s)
```

  - PASS 52 seconds
  - PASS 50 seconds
  - PASS 51 seconds
  - PASS 51 seconds
  - PASS 56 seconds
  - PASS 54 seconds
  - PASS 53 seconds
- 2025-09-02 PASS 53 seconds
- 2025-09-03 PASS 57 seconds
- 2025-09-04 PASS 51 seconds