# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-04-16 00:50](#error-2026-04-16t0050330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032551ec945fedc717561/clusters | dev | out_of_capacity | 1.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 seconds
- 2026-04-08 PASS 3 seconds
- 2026-04-09

### Error 2026-04-09T00:40:53+00:00
```
2026-04-09T00:40:53.0818943Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-04-09T00:40:53.0819594Z     resource_test.go:81: Creating execution project (1): test-acc-tf-p-8013967836652384346
2026-04-09T00:41:57.8474918Z     resource_test.go:81: 
2026-04-09T00:41:57.8478452Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:41:57.8482483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:41:57.8485103Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:41:57.8487485Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-09T00:41:57.8489872Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:81
2026-04-09T00:41:57.8491346Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T00:41:57.8491869Z         	Error:      	Received unexpected error:
2026-04-09T00:41:57.8493845Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:57.8495162Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-04-09T00:41:57.8497053Z         	Messages:   	Project creation failed: test-acc-tf-p-8013967836652384346, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:57.8498575Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate (64.77s)
```

- 2026-04-10 PASS 2 seconds
- 2026-04-11 PASS 3 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 3 seconds
- 2026-04-14 PASS 2 seconds
- 2026-04-15 PASS 2 seconds
- 2026-04-16

### Error 2026-04-16T00:50:33+00:00
```
2026-04-16T00:50:33.6197251Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-04-16T00:50:33.6197896Z     resource_test.go:81: Creating execution cluster: test-acc-tf-c-4822474223304988161
2026-04-16T00:50:34.6792212Z     resource_test.go:81: 
2026-04-16T00:50:34.6794241Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:50:34.6797150Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:50:34.6799429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:81
2026-04-16T00:50:34.6800312Z         	Error:      	Received unexpected error:
2026-04-16T00:50:34.6802907Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc717561/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:34.6804640Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-04-16T00:50:34.6806910Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4822474223304988161, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc717561/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:34.6808523Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate (1.06s)
```

- 2026-04-17 PASS 2 seconds
- 2026-04-18 PASS 3 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 2 seconds
- 2026-04-21 PASS 2 seconds
- 2026-04-22 PASS 2 seconds
- 2026-04-23 PASS 3 seconds
- 2026-04-24 PASS 2 seconds
- 2026-04-25 PASS 3 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 seconds
- 2026-04-28 PASS 2 seconds
- 2026-04-29 PASS 2 seconds
- 2026-04-30 PASS 3 seconds
- 2026-05-01 PASS 2 seconds
- 2026-05-02 PASS 2 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 seconds
- 2026-05-05 PASS 2 seconds
- 2026-05-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 2 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 2 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a second
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a second
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 2 seconds
- 2026-05-04 PASS 2 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 2 seconds
