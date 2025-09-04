# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-27 00:28](#error-2025-08-27t0028070000) |  | dev | 15.02s
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

### Error 2025-08-27T00:28:07+00:00
```
2025-08-27T00:28:07.3679095Z === RUN   TestAccPushBasedLogExport_basic
2025-08-27T00:28:17.0594163Z   
2025-08-27T00:28:17.0594761Z     resource_test.go:24: Step 1/3 error: Error running apply: exit status 1
2025-08-27T00:28:17.0595462Z         
2025-08-27T00:28:17.0596894Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-2369330725554953760-policy): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T00:28:17.0598117Z         	status code: 409, request id: 0ac808a7-d2fa-4f85-b19b-c205ae3f0816
2025-08-27T00:28:17.0598544Z         
2025-08-27T00:28:17.0599056Z           with aws_iam_role.test_role,
2025-08-27T00:28:17.0599825Z           on terraform_plugin_test.tf line 60, in resource "aws_iam_role" "test_role":
2025-08-27T00:28:17.0600453Z           60: resource "aws_iam_role" "test_role" {
2025-08-27T00:28:17.0600755Z         
2025-08-27T00:28:22.5743598Z --- FAIL: TestAccPushBasedLogExport_basic (15.21s)
```

- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:26+00:00
```
2025-09-01T00:30:26.6187735Z === RUN   TestAccPushBasedLogExport_basic
2025-09-01T00:30:26.6188250Z     resource_test.go:24: Creating execution project: test-acc-tf-p-877013522050899507
2025-09-01T00:30:26.7835974Z     resource_test.go:24: 
2025-09-01T00:30:26.7838079Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:26.7840629Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:26.7843614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:31
2025-09-01T00:30:26.7846291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:24
2025-09-01T00:30:26.7847116Z         	Error:      	Received unexpected error:
2025-09-01T00:30:26.7849836Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:26.7851233Z         	Test:       	TestAccPushBasedLogExport_basic
2025-09-01T00:30:26.7853440Z         	Messages:   	Project creation failed: test-acc-tf-p-877013522050899507, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:26.7854979Z --- FAIL: TestAccPushBasedLogExport_basic (0.17s)
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