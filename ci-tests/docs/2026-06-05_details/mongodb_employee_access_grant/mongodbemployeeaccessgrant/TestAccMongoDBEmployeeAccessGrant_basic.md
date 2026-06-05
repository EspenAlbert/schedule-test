# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 00:54](#error-2026-05-07t0054470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s
[2026-05-23 00:58](#error-2026-05-23t0058500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL a minute

### Error 2026-05-07T00:54:47+00:00
```
2026-05-07T00:54:47.4458720Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-05-07T00:54:47.4460170Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-8446942152259537202
2026-05-07T00:55:49.3996870Z     resource_test.go:26: 
2026-05-07T00:55:49.3998249Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-07T00:55:49.4000789Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-07T00:55:49.4002707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-07T00:55:49.4004933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-07T00:55:49.4007308Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-05-07T00:55:49.4009433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2026-05-07T00:55:49.4010299Z         	Error:      	Received unexpected error:
2026-05-07T00:55:49.4012265Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T00:55:49.4013350Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2026-05-07T00:55:49.4015115Z         	Messages:   	Project creation failed: test-acc-tf-p-8446942152259537202, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T00:55:49.4016552Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (61.95s)
```

  - PASS 48 minutes
- 2026-05-08 PASS 9 seconds
- 2026-05-09 PASS 18 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 13 minutes
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 20 minutes
- 2026-05-15 PASS 8 seconds
- 2026-05-16 PASS 12 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 9 seconds
- 2026-05-19 PASS 12 minutes
- 2026-05-20 PASS 10 seconds
- 2026-05-21 PASS 17 minutes
- 2026-05-22 PASS 7 seconds
- 2026-05-23

### Error 2026-05-23T00:58:50+00:00
```
2026-05-23T00:58:50.4982535Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-05-23T00:58:50.4986044Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-2665992828919128802
2026-05-23T00:59:52.8057066Z     resource_test.go:26: 
2026-05-23T00:59:52.8059044Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T00:59:52.8062835Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T00:59:52.8066664Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T00:59:52.8069759Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-23T00:59:52.8073232Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-05-23T00:59:52.8075566Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2026-05-23T00:59:52.8076442Z         	Error:      	Received unexpected error:
2026-05-23T00:59:52.8078434Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T00:59:52.8079532Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2026-05-23T00:59:52.8081622Z         	Messages:   	Project creation failed: test-acc-tf-p-2665992828919128802, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T00:59:52.8082861Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (62.31s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 11 seconds
- 2026-05-26 PASS 12 minutes
- 2026-05-27 PASS 10 seconds
- 2026-05-28 PASS 13 minutes
- 2026-05-29 PASS 9 seconds
- 2026-05-30 PASS 13 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 7 seconds
- 2026-06-02 PASS 11 minutes
- 2026-06-03 PASS 7 seconds
- 2026-06-04 PASS 22 minutes
- 2026-06-05 PASS 10 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 6 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 8 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 8 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 7 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
