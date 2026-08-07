# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:44](#error-2026-07-21t0044370000) |  | dev | flaky_500 | 33.08s
[2026-07-23 00:45](#error-2026-07-23t0045060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 22 minutes
- 2026-07-10 PASS 10 seconds
- 2026-07-11 PASS 13 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14 PASS 12 minutes
- 2026-07-15 PASS 15 seconds
- 2026-07-16 PASS 42 minutes
- 2026-07-17 PASS 12 seconds
- 2026-07-18 PASS 12 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:44:37+00:00
```
2026-07-21T00:44:37.8064013Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-07-21T00:44:37.8069329Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-8998007545892947411
2026-07-21T00:45:11.5732224Z     resource_test.go:26: 
2026-07-21T00:45:11.5734655Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:45:11.5739190Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:45:11.5743076Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:45:11.5746210Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T00:45:11.5748747Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-07-21T00:45:11.5750834Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2026-07-21T00:45:11.5751670Z         	Error:      	Received unexpected error:
2026-07-21T00:45:11.5752612Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:45:11.5753597Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2026-07-21T00:45:11.5754706Z         	Messages:   	Project creation failed: test-acc-tf-p-8998007545892947411, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:45:11.5755490Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (33.77s)
```

- 2026-07-22 PASS 8 seconds
- 2026-07-23

### Error 2026-07-23T00:45:06+00:00
```
2026-07-23T00:45:06.6244247Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-07-23T00:45:06.6246334Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-7196664390210340791
2026-07-23T00:46:08.3454196Z     resource_test.go:26: 
2026-07-23T00:46:08.3456004Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:46:08.3459957Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:46:08.3462428Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:46:08.3464481Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T00:46:08.3466544Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-07-23T00:46:08.3468679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2026-07-23T00:46:08.3469565Z         	Error:      	Received unexpected error:
2026-07-23T00:46:08.3471832Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:08.3472983Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2026-07-23T00:46:08.3474797Z         	Messages:   	Project creation failed: test-acc-tf-p-7196664390210340791, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:08.3476043Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (61.72s)
```

- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 14 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 49 minutes
- 2026-07-28 PASS 29 minutes
- 2026-07-29 PASS 10 seconds
- 2026-07-30 PASS 48 minutes
- 2026-07-31 PASS 6 seconds
- 2026-08-01 PASS 12 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 9 seconds
- 2026-08-04 PASS 13 minutes
- 2026-08-05 PASS 11 seconds
- 2026-08-06 PASS 12 minutes
- 2026-08-07 PASS 10 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 12 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 8 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 minutes
  - PASS 18 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 9 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
