# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-23 01:00](#error-2026-05-23t0100570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-05-08 PASS 2 seconds
- 2026-05-09 PASS 3 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 2 seconds
- 2026-05-12 PASS 2 seconds
- 2026-05-13 PASS 2 seconds
- 2026-05-14 PASS 2 seconds
- 2026-05-15 PASS 2 seconds
- 2026-05-16 PASS 3 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 2 seconds
- 2026-05-19 PASS 3 seconds
- 2026-05-20 PASS 3 seconds
- 2026-05-21 PASS 3 seconds
- 2026-05-22 PASS 2 seconds
- 2026-05-23

### Error 2026-05-23T01:00:57+00:00
```
2026-05-23T01:00:57.6332611Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-05-23T01:00:57.6333269Z     resource_test.go:81: Creating execution project (1): test-acc-tf-p-4214737019511407720
2026-05-23T01:02:04.0515666Z     resource_test.go:81: 
2026-05-23T01:02:04.0518305Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:02:04.0521472Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:02:04.0523677Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:02:04.0525797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-23T01:02:04.0528118Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:81
2026-05-23T01:02:04.0529412Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:02:04.0529926Z         	Error:      	Received unexpected error:
2026-05-23T01:02:04.0532190Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:04.0533473Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-05-23T01:02:04.0535541Z         	Messages:   	Project creation failed: test-acc-tf-p-4214737019511407720, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:04.0536863Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate (66.42s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 3 seconds
- 2026-05-26 PASS 3 seconds
- 2026-05-27 PASS 3 seconds
- 2026-05-28 PASS 2 seconds
- 2026-05-29 PASS 2 seconds
- 2026-05-30 PASS 3 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 2 seconds
- 2026-06-02 PASS 3 seconds
- 2026-06-03 PASS 2 seconds
- 2026-06-04 PASS 3 seconds
- 2026-06-05 PASS 3 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 2 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 2 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
