# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-23 00:47](#error-2026-07-23t0047090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 3 seconds
- 2026-07-10 PASS 3 seconds
- 2026-07-11 PASS 3 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 3 seconds
- 2026-07-14 PASS 3 seconds
- 2026-07-15 PASS 2 seconds
- 2026-07-16 PASS 4 seconds
- 2026-07-17 PASS 3 seconds
- 2026-07-18 PASS 3 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 13 minutes
- 2026-07-22 PASS 2 seconds
- 2026-07-23

### Error 2026-07-23T00:47:09+00:00
```
2026-07-23T00:47:09.9075009Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-07-23T00:47:09.9075698Z     resource_test.go:81: Creating execution project (1): test-acc-tf-p-5203908198996847736
2026-07-23T00:48:16.7560868Z     resource_test.go:81: 
2026-07-23T00:48:16.7563911Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:16.7568182Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:16.7571936Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:16.7575373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T00:48:16.7577738Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:81
2026-07-23T00:48:16.7579031Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:48:16.7579585Z         	Error:      	Received unexpected error:
2026-07-23T00:48:16.7581888Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:16.7583138Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate
2026-07-23T00:48:16.7585002Z         	Messages:   	Project creation failed: test-acc-tf-p-5203908198996847736, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:16.7586288Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTimeUpdate (66.85s)
```

- 2026-07-24 PASS 2 seconds
- 2026-07-25 PASS 2 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 seconds
- 2026-07-28 PASS a second
- 2026-07-29 PASS 3 seconds
- 2026-07-30 PASS a second
- 2026-07-31 PASS 2 seconds
- 2026-08-01 PASS 2 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 seconds
- 2026-08-04 PASS 2 seconds
- 2026-08-05 PASS 3 seconds
- 2026-08-06 PASS 2 seconds
- 2026-08-07 PASS 3 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a second
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
