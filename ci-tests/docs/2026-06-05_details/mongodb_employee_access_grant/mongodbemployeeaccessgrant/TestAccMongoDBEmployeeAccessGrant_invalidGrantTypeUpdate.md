# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-23 01:03](#error-2026-05-23t0103080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-05-08 PASS 2 seconds
- 2026-05-09 PASS 3 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 2 seconds
- 2026-05-12 PASS 3 seconds
- 2026-05-13 PASS 2 seconds
- 2026-05-14 PASS 3 seconds
- 2026-05-15 PASS 2 seconds
- 2026-05-16 PASS 3 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 3 seconds
- 2026-05-19 PASS 3 seconds
- 2026-05-20 PASS 3 seconds
- 2026-05-21 PASS 3 seconds
- 2026-05-22 PASS 2 seconds
- 2026-05-23

### Error 2026-05-23T01:03:08+00:00
```
2026-05-23T01:03:08.7897623Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate
2026-05-23T01:03:08.7898455Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-366365555756626329
2026-05-23T01:04:16.4806628Z     resource_test.go:115: 
2026-05-23T01:04:16.4810862Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:04:16.4813937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:04:16.4816073Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:04:16.4818182Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-23T01:04:16.4820494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:115
2026-05-23T01:04:16.4822051Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:04:16.4822564Z         	Error:      	Received unexpected error:
2026-05-23T01:04:16.4824538Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:04:16.4825728Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate
2026-05-23T01:04:16.4827609Z         	Messages:   	Project creation failed: test-acc-tf-p-366365555756626329, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:04:16.4828896Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidGrantTypeUpdate (67.69s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 3 seconds
- 2026-05-26 PASS 3 seconds
- 2026-05-27 PASS 3 seconds
- 2026-05-28 PASS 3 seconds
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
