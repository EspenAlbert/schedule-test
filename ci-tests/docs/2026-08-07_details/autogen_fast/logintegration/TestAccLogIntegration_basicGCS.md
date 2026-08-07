# autogen_fast/logintegration/TestAccLogIntegration_basicGCS Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057030000) |  | dev | flaky_500 | 48.02s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.06s
[2026-07-18 00:49](#error-2026-07-18t0049420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.04s
[2026-07-21 00:53](#error-2026-07-21t0053050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.08s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-29 00:48](#error-2026-07-29t0048370000) |  | dev |  | 110.10s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:03+00:00
```
2026-07-09T00:57:03.9615760Z === RUN   TestAccLogIntegration_basicGCS
2026-07-09T00:57:03.9616411Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-7123629507719594082
2026-07-09T00:57:03.9616971Z     resource_test.go:159: 
2026-07-09T00:57:03.9617952Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:03.9620144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:03.9622027Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:03.9624011Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-07-09T00:57:03.9624876Z         	Error:      	Received unexpected error:
2026-07-09T00:57:03.9625859Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:57:03.9626514Z         	Test:       	TestAccLogIntegration_basicGCS
2026-07-09T00:57:03.9627652Z         	Messages:   	Project creation failed: test-acc-tf-p-7123629507719594082, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:57:03.9628463Z --- FAIL: TestAccLogIntegration_basicGCS (48.18s)
```

- 2026-07-10 PASS 2 minutes
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1525605Z === RUN   TestAccLogIntegration_basicGCS
2026-07-11T00:54:31.1526357Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-5164379526097031741
2026-07-11T00:54:31.1526918Z     resource_test.go:159: 
2026-07-11T00:54:31.1527891Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1529782Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1531676Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1533693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-07-11T00:54:31.1534583Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1536734Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1538123Z         	Test:       	TestAccLogIntegration_basicGCS
2026-07-11T00:54:31.1539956Z         	Messages:   	Project creation failed: test-acc-tf-p-5164379526097031741, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1541205Z --- FAIL: TestAccLogIntegration_basicGCS (64.64s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 2 minutes
- 2026-07-14 PASS 2 minutes
- 2026-07-15 PASS 2 minutes
- 2026-07-16 PASS 2 minutes
- 2026-07-17 PASS 2 minutes
- 2026-07-18

### Error 2026-07-18T00:49:42+00:00
```
2026-07-18T00:49:42.9072107Z === RUN   TestAccLogIntegration_basicGCS
2026-07-18T00:49:42.9072756Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-4208890852799083967
2026-07-18T00:49:42.9073375Z     resource_test.go:159: 
2026-07-18T00:49:42.9074344Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:42.9076321Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:49:42.9078184Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:49:42.9080274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-07-18T00:49:42.9081239Z         	Error:      	Received unexpected error:
2026-07-18T00:49:42.9083231Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9084331Z         	Test:       	TestAccLogIntegration_basicGCS
2026-07-18T00:49:42.9086306Z         	Messages:   	Project creation failed: test-acc-tf-p-4208890852799083967, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9087644Z --- FAIL: TestAccLogIntegration_basicGCS (67.44s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:05+00:00
```
2026-07-21T00:53:05.9954013Z === RUN   TestAccLogIntegration_basicGCS
2026-07-21T00:53:05.9954645Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-801019289612932242
2026-07-21T00:53:05.9955445Z     resource_test.go:159: 
2026-07-21T00:53:05.9956437Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:05.9958292Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:05.9960156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:05.9962121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-07-21T00:53:05.9963287Z         	Error:      	Received unexpected error:
2026-07-21T00:53:05.9965502Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:05.9966604Z         	Test:       	TestAccLogIntegration_basicGCS
2026-07-21T00:53:05.9968520Z         	Messages:   	Project creation failed: test-acc-tf-p-801019289612932242, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:05.9969744Z --- FAIL: TestAccLogIntegration_basicGCS (69.84s)
```

- 2026-07-22 PASS 2 minutes
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9120213Z === RUN   TestAccLogIntegration_basicGCS
2026-07-23T00:48:36.9120716Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-1319520309749116060
2026-07-23T00:48:36.9121154Z     resource_test.go:159: 
2026-07-23T00:48:36.9121920Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.9123654Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9125101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9126625Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-07-23T00:48:36.9127306Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9129684Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9130822Z         	Test:       	TestAccLogIntegration_basicGCS
2026-07-23T00:48:36.9132797Z         	Messages:   	Project creation failed: test-acc-tf-p-1319520309749116060, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:36.9134035Z --- FAIL: TestAccLogIntegration_basicGCS (0.62s)
```

- 2026-07-24 PASS 2 minutes
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 minutes
- 2026-07-28 PASS 2 minutes
- 2026-07-29

### Error 2026-07-29T00:48:37+00:00
```
2026-07-29T00:48:37.1880428Z === RUN   TestAccLogIntegration_basicGCS
2026-07-29T00:48:37.1967894Z === CONT  TestAccLogIntegration_basicGCS
2026-07-29T00:48:37.1982833Z === NAME  TestAccLogIntegration_basicGCS
2026-07-29T00:48:37.1983391Z     resource_test.go:168: Step 1/3 error: Error running apply: exit status 1
2026-07-29T00:48:37.1983840Z         
2026-07-29T00:48:37.1985693Z         Error: Error applying IAM policy for storage bucket "b/mongodb-atlas-tf-zyvrnx0tzv": Error setting IAM policy for storage bucket "b/mongodb-atlas-tf-zyvrnx0tzv": googleapi: Error 400: Service account mongodb-atlas-srqvfkni3cnwvi9e@p-jgksporcfsufqefnmxk0nfep.iam.gserviceaccount.com does not exist., invalid
2026-07-29T00:48:37.1987007Z         
2026-07-29T00:48:37.1987488Z           with google_storage_bucket_iam_member.bucket_permission,
2026-07-29T00:48:37.1988383Z           on terraform_plugin_test.tf line 38, in resource "google_storage_bucket_iam_member" "bucket_permission":
2026-07-29T00:48:37.1989248Z           38: 		resource "google_storage_bucket_iam_member" "bucket_permission" {
2026-07-29T00:48:37.1989691Z         
2026-07-29T00:48:37.1990006Z --- FAIL: TestAccLogIntegration_basicGCS (110.97s)
```

- 2026-07-30 PASS 2 minutes
- 2026-07-31 PASS 2 minutes
- 2026-08-01 PASS 2 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 2 minutes
- 2026-08-04 PASS 2 minutes
- 2026-08-05 PASS 2 minutes
- 2026-08-06 PASS 2 minutes
- 2026-08-07 PASS 2 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 2 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
