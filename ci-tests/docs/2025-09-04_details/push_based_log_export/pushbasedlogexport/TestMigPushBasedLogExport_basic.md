# push_based_log_export/pushbasedlogexport/TestMigPushBasedLogExport_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-27 00:27](#error-2025-08-27t0027290000) |  | dev |  | 20.08s
[2025-09-01 00:30](#error-2025-09-01t0030260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS a minute
- 2025-08-09 PASS a minute
- 2025-08-10 PASS a minute
- 2025-08-11 PASS a minute
- 2025-08-12 PASS a minute
- 2025-08-13 PASS a minute
- 2025-08-14 PASS a minute
- 2025-08-15 PASS a minute
- 2025-08-16 PASS a minute
- 2025-08-17 PASS a minute
- 2025-08-18 PASS a minute
- 2025-08-19 PASS a minute
- 2025-08-20
  - PASS a minute
  - PASS a minute
- 2025-08-21 PASS a minute
- 2025-08-22 PASS a minute
- 2025-08-23 PASS a minute
- 2025-08-24 PASS a minute
- 2025-08-25 PASS a minute
- 2025-08-26 PASS a minute
- 2025-08-27

### Error 2025-08-27T00:27:29+00:00
```
2025-08-27T00:27:29.9656306Z === RUN   TestMigPushBasedLogExport_basic
2025-08-27T00:27:29.9659995Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-7305336673092277002
2025-08-27T00:27:44.9349051Z    test_name=TestMigPushBasedLogExport_basic test_terraform_path=/home/runner/work/_temp/5f0037fb-d9e1-4926-a333-65b3721c357e/terraform test_working_directory=/tmp/plugintest4010604484
2025-08-27T00:27:44.9350898Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-08-27T00:27:44.9351683Z         
2025-08-27T00:27:44.9353253Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-1103593626983348583-policy): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T00:27:44.9354777Z         	status code: 409, request id: 30e595bf-36ad-431c-ac59-efe2316bdb5d
2025-08-27T00:27:44.9356862Z         
2025-08-27T00:27:44.9357378Z           with aws_iam_role.test_role,
2025-08-27T00:27:44.9358392Z           on terraform_plugin_test.tf line 62, in resource "aws_iam_role" "test_role":
2025-08-27T00:27:44.9359315Z           62: resource "aws_iam_role" "test_role" {
2025-08-27T00:27:44.9359812Z         
2025-08-27T00:27:50.7302348Z --- FAIL: TestMigPushBasedLogExport_basic (20.77s)
```

- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:26+00:00
```
2025-09-01T00:30:26.0401323Z === RUN   TestMigPushBasedLogExport_basic
2025-09-01T00:30:26.0402887Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5900714031080621036
2025-09-01T00:30:26.4500035Z     resource_migration_test.go:11: 
2025-09-01T00:30:26.4501865Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:26.4503968Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:26.4506152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2025-09-01T00:30:26.4508854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_migration_test.go:11
2025-09-01T00:30:26.4509744Z         	Error:      	Received unexpected error:
2025-09-01T00:30:26.4512685Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:26.4513967Z         	Test:       	TestMigPushBasedLogExport_basic
2025-09-01T00:30:26.4516223Z         	Messages:   	Project creation failed: test-acc-tf-p-5900714031080621036, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:26.4517812Z --- FAIL: TestMigPushBasedLogExport_basic (0.41s)
```

  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute