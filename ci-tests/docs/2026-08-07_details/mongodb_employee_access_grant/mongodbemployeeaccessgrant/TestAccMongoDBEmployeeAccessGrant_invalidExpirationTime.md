# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:45](#error-2026-07-21t0045110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.08s
[2026-07-23 00:46](#error-2026-07-23t0046080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS a moment
- 2026-07-10 PASS a moment
- 2026-07-11 PASS a moment
- 2026-07-12: MISSING
- 2026-07-13 PASS a moment
- 2026-07-14 PASS a moment
- 2026-07-15 PASS a moment
- 2026-07-16 PASS a moment
- 2026-07-17 PASS a moment
- 2026-07-18 PASS a moment
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:45:11+00:00
```
2026-07-21T00:45:11.5755989Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-07-21T00:45:11.5756656Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-8102796776617680179
2026-07-21T00:46:20.3398856Z     resource_test.go:66: 
2026-07-21T00:46:20.3401003Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:46:20.3405280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:46:20.3407482Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:46:20.3409934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T00:46:20.3412249Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2026-07-21T00:46:20.3413982Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:46:20.3414581Z         	Error:      	Received unexpected error:
2026-07-21T00:46:20.3416762Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:20.3417977Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-07-21T00:46:20.3419833Z         	Messages:   	Project creation failed: test-acc-tf-p-8102796776617680179, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:20.3421108Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (68.77s)
```

- 2026-07-22 PASS a moment
- 2026-07-23

### Error 2026-07-23T00:46:08+00:00
```
2026-07-23T00:46:08.3476553Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-07-23T00:46:08.3477211Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-1465412472009625830
2026-07-23T00:47:09.9043804Z     resource_test.go:66: 
2026-07-23T00:47:09.9048016Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:09.9055981Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:47:09.9059237Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:47:09.9061979Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T00:47:09.9064956Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2026-07-23T00:47:09.9066772Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:47:09.9067371Z         	Error:      	Received unexpected error:
2026-07-23T00:47:09.9069634Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:09.9071214Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-07-23T00:47:09.9073099Z         	Messages:   	Project creation failed: test-acc-tf-p-1465412472009625830, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:09.9074421Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (61.56s)
```

- 2026-07-24 PASS a moment
- 2026-07-25 PASS a moment
- 2026-07-26: MISSING
- 2026-07-27 PASS a moment
- 2026-07-28 PASS a moment
- 2026-07-29 PASS a moment
- 2026-07-30 PASS a moment
- 2026-07-31 PASS a moment
- 2026-08-01 PASS a moment
- 2026-08-02: MISSING
- 2026-08-03 PASS a moment
- 2026-08-04 PASS a moment
- 2026-08-05 PASS a moment
- 2026-08-06 PASS a moment
- 2026-08-07 PASS a moment

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a moment
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a moment
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a moment
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a moment
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a moment
  - PASS a moment
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a moment
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
