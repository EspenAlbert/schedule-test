# push_based_log_export/pushbasedlogexport/TestMigPushBasedLogExport_noPrefixPath Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-27 00:27](#error-2025-08-27t0027500000) |  | dev | 16.06s
[2025-09-01 00:30](#error-2025-09-01t0030260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

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

### Error 2025-08-27T00:27:50+00:00
```
2025-08-27T00:27:50.7303011Z === RUN   TestMigPushBasedLogExport_noPrefixPath
2025-08-27T00:28:01.6533998Z   
2025-08-27T00:28:01.6534839Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-08-27T00:28:01.6535676Z         
2025-08-27T00:28:01.6537202Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-2712597499381778343-policy): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T00:28:01.6538851Z         	status code: 409, request id: 24000a72-e174-4911-b7f9-63cb45b777ef
2025-08-27T00:28:01.6539503Z         
2025-08-27T00:28:01.6540047Z           with aws_iam_role.test_role,
2025-08-27T00:28:01.6541122Z           on terraform_plugin_test.tf line 62, in resource "aws_iam_role" "test_role":
2025-08-27T00:28:01.6542072Z           62: resource "aws_iam_role" "test_role" {
2025-08-27T00:28:01.6542587Z         
2025-08-27T00:28:07.3678359Z --- FAIL: TestMigPushBasedLogExport_noPrefixPath (16.64s)
```

- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:26+00:00
```
2025-09-01T00:30:26.4518233Z === RUN   TestMigPushBasedLogExport_noPrefixPath
2025-09-01T00:30:26.4518847Z     resource_migration_test.go:16: Creating execution project: test-acc-tf-p-3940755264793497521
2025-09-01T00:30:26.6169959Z     resource_migration_test.go:16: 
2025-09-01T00:30:26.6171667Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:26.6173709Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:26.6175876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:74
2025-09-01T00:30:26.6178232Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_migration_test.go:16
2025-09-01T00:30:26.6179174Z         	Error:      	Received unexpected error:
2025-09-01T00:30:26.6182419Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:26.6183750Z         	Test:       	TestMigPushBasedLogExport_noPrefixPath
2025-09-01T00:30:26.6185957Z         	Messages:   	Project creation failed: test-acc-tf-p-3940755264793497521, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:26.6187375Z --- FAIL: TestMigPushBasedLogExport_noPrefixPath (0.17s)
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