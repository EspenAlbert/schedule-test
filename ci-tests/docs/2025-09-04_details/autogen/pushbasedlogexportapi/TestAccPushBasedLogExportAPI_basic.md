# autogen/pushbasedlogexportapi/TestAccPushBasedLogExportAPI_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-27 01:05](#error-2025-08-27t0105040000) |  | dev | dangling_resource | 18.02s
[2025-09-01 00:32](#error-2025-09-01t0032130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s

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

### Error 2025-08-27T01:05:04+00:00
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-08-27T01:05:04.695000+00:00-TestAccPushBasedLogExportAPI_basic',confidence=1.0,ts_when='8 days ago')

```
2025-08-27T01:05:04.6957978Z === RUN   TestAccPushBasedLogExportAPI_basic
2025-08-27T01:05:04.6958501Z     resource_test.go:22: Creating execution project: test-acc-tf-p-5811327355306631611
2025-08-27T01:05:04.6963923Z    test_name=TestAccPushBasedLogExportAPI_basic test_terraform_path=/home/runner/work/_temp/e95496c2-7821-4f14-9409-2de50cd5d65a/terraform test_working_directory=/tmp/plugintest4208927757
2025-08-27T01:05:04.6964890Z     resource_test.go:22: Step 1/3 error: Error running apply: exit status 1
2025-08-27T01:05:04.6965240Z         
2025-08-27T01:05:04.6966052Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-3253563775345979219-policy): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T01:05:04.6967018Z         	status code: 409, request id: 143dc04b-278d-421c-a1c4-7002b6ff9ac1
2025-08-27T01:05:04.6967365Z         
2025-08-27T01:05:04.6967636Z           with aws_iam_role.test_role,
2025-08-27T01:05:04.6968294Z           on terraform_plugin_test.tf line 60, in resource "aws_iam_role" "test_role":
2025-08-27T01:05:04.6968794Z           60: resource "aws_iam_role" "test_role" {
2025-08-27T01:05:04.6969068Z         
2025-08-27T01:05:04.6969358Z --- FAIL: TestAccPushBasedLogExportAPI_basic (18.20s)
```

- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:32:13+00:00
```
2025-09-01T00:32:13.2980250Z === RUN   TestAccPushBasedLogExportAPI_basic
2025-09-01T00:32:13.2981282Z     resource_test.go:22: Creating execution project: test-acc-tf-p-6606915064089562040
2025-09-01T00:32:13.2982002Z     resource_test.go:22: 
2025-09-01T00:32:13.2983442Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:32:13.2986318Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:32:13.2989494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:29
2025-09-01T00:32:13.2992925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:22
2025-09-01T00:32:13.2994237Z         	Error:      	Received unexpected error:
2025-09-01T00:32:13.2998827Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:32:13.3001173Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2025-09-01T00:32:13.3005238Z         	Messages:   	Project creation failed: test-acc-tf-p-6606915064089562040, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:32:13.3007706Z --- FAIL: TestAccPushBasedLogExportAPI_basic (0.10s)
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