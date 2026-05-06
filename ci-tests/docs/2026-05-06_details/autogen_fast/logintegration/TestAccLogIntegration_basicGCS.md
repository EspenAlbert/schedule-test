# autogen_fast/logintegration/TestAccLogIntegration_basicGCS Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-22 01:07](#error-2026-04-22t0107130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69e81a7d632b92cc72e52f42/cloudProviderAccess/GCP/69e81a8ca8d803e161309c1e | dev | flaky_500 | 1212.07s
[2026-04-30 01:01](#error-2026-04-30t0101120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.00s
[2026-05-06 00:56](#error-2026-05-06t0056200000) |  | dev |  | 100.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 minutes
- 2026-04-08 PASS 2 minutes
- 2026-04-09 PASS 2 minutes
- 2026-04-10 PASS 2 minutes
- 2026-04-11 PASS 2 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 2 minutes
- 2026-04-14 PASS 2 minutes
- 2026-04-15 PASS 2 minutes
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 2 minutes
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 2 minutes
- 2026-04-21 PASS a minute
- 2026-04-22

### Error 2026-04-22T01:07:13+00:00
```
2026-04-22T01:07:13.8555381Z === RUN   TestAccLogIntegration_basicGCS
2026-04-22T01:07:13.8639565Z === CONT  TestAccLogIntegration_basicGCS
2026-04-22T01:07:13.8664559Z === NAME  TestAccLogIntegration_basicGCS
2026-04-22T01:07:13.8665121Z     resource_test.go:166: Step 1/3 error: Error running apply: exit status 1
2026-04-22T01:07:13.8665555Z         
2026-04-22T01:07:13.8666267Z         Error: timeout while waiting for state to become 'COMPLETE, FAILED' (last state: 'IN_PROGRESS', timeout: 20m0s)
2026-04-22T01:07:13.8667505Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2026-04-22T01:07:13.8669710Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a7d632b92cc72e52f42/cloudProviderAccess/GCP/69e81a8ca8d803e161309c1e DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-22T01:07:13.8671197Z         
2026-04-22T01:07:13.8671669Z           with mongodbatlas_cloud_provider_access_setup.gcp_setup,
2026-04-22T01:07:13.8672713Z           on terraform_plugin_test.tf line 22, in resource "mongodbatlas_cloud_provider_access_setup" "gcp_setup":
2026-04-22T01:07:13.8673544Z           22: 		resource "mongodbatlas_cloud_provider_access_setup" "gcp_setup" {
2026-04-22T01:07:13.8673971Z         
2026-04-22T01:07:13.8674267Z --- FAIL: TestAccLogIntegration_basicGCS (1212.69s)
```

- 2026-04-23 PASS 2 minutes
- 2026-04-24 PASS 2 minutes
- 2026-04-25 PASS 2 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 2 minutes
- 2026-04-28 PASS 2 minutes
- 2026-04-29 PASS 2 minutes
- 2026-04-30

### Error 2026-04-30T01:01:12+00:00
```
2026-04-30T01:01:12.3459517Z === RUN   TestAccLogIntegration_basicGCS
2026-04-30T01:01:12.3460078Z     resource_test.go:157: Creating execution project (1): test-acc-tf-p-1488965653232476941
2026-04-30T01:01:12.3461073Z     resource_test.go:157: 
2026-04-30T01:01:12.3461951Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:12.3463649Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:12.3465340Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:12.3467338Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:157
2026-04-30T01:01:12.3468152Z         	Error:      	Received unexpected error:
2026-04-30T01:01:12.3469940Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:12.3471117Z         	Test:       	TestAccLogIntegration_basicGCS
2026-04-30T01:01:12.3472755Z         	Messages:   	Project creation failed: test-acc-tf-p-1488965653232476941, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:12.3473908Z --- FAIL: TestAccLogIntegration_basicGCS (76.03s)
```

- 2026-05-01 PASS 3 minutes
- 2026-05-02 PASS 2 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 minutes
- 2026-05-05 PASS 2 minutes
- 2026-05-06

### Error 2026-05-06T00:56:20+00:00
```
2026-05-06T00:56:20.8217434Z === RUN   TestAccLogIntegration_basicGCS
2026-05-06T00:56:20.8307680Z === CONT  TestAccLogIntegration_basicGCS
2026-05-06T00:56:20.8323467Z === NAME  TestAccLogIntegration_basicGCS
2026-05-06T00:56:20.8324170Z     resource_test.go:168: Step 1/3 error: Error running apply: exit status 1
2026-05-06T00:56:20.8324642Z         
2026-05-06T00:56:20.8326541Z         Error: Error applying IAM policy for storage bucket "b/mongodb-atlas-tf-r3t68a2pgc": Error setting IAM policy for storage bucket "b/mongodb-atlas-tf-r3t68a2pgc": googleapi: Error 400: Service account mongodb-atlas-imp5rvz7j954uq2w@p-u1ilwbjwu76o8athpasegwig.iam.gserviceaccount.com does not exist., invalid
2026-05-06T00:56:20.8327946Z         
2026-05-06T00:56:20.8328415Z           with google_storage_bucket_iam_member.bucket_permission,
2026-05-06T00:56:20.8329318Z           on terraform_plugin_test.tf line 38, in resource "google_storage_bucket_iam_member" "bucket_permission":
2026-05-06T00:56:20.8330183Z           38: 		resource "google_storage_bucket_iam_member" "bucket_permission" {
2026-05-06T00:56:20.8330637Z         
2026-05-06T00:56:20.8330955Z --- FAIL: TestAccLogIntegration_basicGCS (100.90s)
```


## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS a minute
  - PASS 2 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 2 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 2 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 2 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 2 minutes
- 2026-05-04 PASS 2 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 2 minutes
