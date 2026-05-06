# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:38](#error-2026-04-09t0038160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.02s
[2026-04-16 00:50](#error-2026-04-16t0050290000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032551ec945fedc717561/clusters | dev | out_of_capacity | 3.10s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 11 minutes
- 2026-04-08 PASS 11 seconds
- 2026-04-09

### Error 2026-04-09T00:38:16+00:00
```
2026-04-09T00:38:16.3227391Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-04-09T00:38:16.3228832Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-8056561955887508681
2026-04-09T00:39:28.4778652Z     resource_test.go:26: 
2026-04-09T00:39:28.4782651Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:39:28.4786594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:39:28.4791017Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:39:28.4794090Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-09T00:39:28.4797561Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-04-09T00:39:28.4799731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2026-04-09T00:39:28.4800593Z         	Error:      	Received unexpected error:
2026-04-09T00:39:28.4802568Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:39:28.4803673Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2026-04-09T00:39:28.4805489Z         	Messages:   	Project creation failed: test-acc-tf-p-8056561955887508681, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:39:28.4806701Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (72.16s)
```

- 2026-04-10 PASS 10 seconds
- 2026-04-11 PASS 11 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 10 seconds
- 2026-04-14 PASS 12 minutes
- 2026-04-15 PASS 7 seconds
- 2026-04-16

### Error 2026-04-16T00:50:29+00:00
```
2026-04-16T00:50:29.0887333Z === RUN   TestAccMongoDBEmployeeAccessGrant_basic
2026-04-16T00:50:29.0889193Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-6465851261505236134
2026-04-16T00:50:32.4857686Z     resource_test.go:26: Creating execution cluster: test-acc-tf-c-2765224879639483418
2026-04-16T00:50:33.0505050Z     resource_test.go:26: 
2026-04-16T00:50:33.0507450Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:50:33.0510665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:50:33.0513441Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:31
2026-04-16T00:50:33.0515938Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:26
2026-04-16T00:50:33.0516795Z         	Error:      	Received unexpected error:
2026-04-16T00:50:33.0519381Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc717561/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:33.0520735Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_basic
2026-04-16T00:50:33.0522947Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2765224879639483418, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc717561/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:33.0524619Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_basic (3.96s)
```

- 2026-04-17 PASS 10 seconds
- 2026-04-18 PASS 13 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 8 seconds
- 2026-04-21 PASS 13 minutes
- 2026-04-22 PASS 7 seconds
- 2026-04-23 PASS 15 minutes
- 2026-04-24 PASS 7 seconds
- 2026-04-25 PASS 11 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 11 seconds
- 2026-04-28 PASS 11 minutes
- 2026-04-29 PASS 8 seconds
- 2026-04-30 PASS 20 minutes
- 2026-05-01 PASS 8 seconds
- 2026-05-02 PASS 11 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 7 seconds
- 2026-05-05 PASS 18 minutes
- 2026-05-06 PASS 10 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 9 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 9 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 9 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 5 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 5 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 8 seconds
- 2026-05-04 PASS 8 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 7 seconds
