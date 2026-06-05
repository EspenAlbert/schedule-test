# mongodb_employee_access_grant/mongodbemployeeaccessgrant/TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-23 00:59](#error-2026-05-23t0059520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 16 minutes
  - PASS a moment
- 2026-05-08 PASS a moment
- 2026-05-09 PASS a moment
- 2026-05-10: MISSING
- 2026-05-11 PASS a moment
- 2026-05-12 PASS a moment
- 2026-05-13 PASS a moment
- 2026-05-14 PASS a moment
- 2026-05-15 PASS a moment
- 2026-05-16 PASS a moment
- 2026-05-17: MISSING
- 2026-05-18 PASS a moment
- 2026-05-19 PASS a moment
- 2026-05-20 PASS a moment
- 2026-05-21 PASS a moment
- 2026-05-22 PASS a moment
- 2026-05-23

### Error 2026-05-23T00:59:52+00:00
```
2026-05-23T00:59:52.8083361Z === RUN   TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-05-23T00:59:52.8084011Z     resource_test.go:66: Creating execution project (1): test-acc-tf-p-4175530731130948700
2026-05-23T01:00:57.6298171Z     resource_test.go:66: 
2026-05-23T01:00:57.6301779Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:00:57.6307270Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:00:57.6310802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:00:57.6313859Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-23T01:00:57.6320540Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/mongodbemployeeaccessgrant/resource_test.go:66
2026-05-23T01:00:57.6324574Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:00:57.6325463Z         	Error:      	Received unexpected error:
2026-05-23T01:00:57.6327443Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:57.6328620Z         	Test:       	TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime
2026-05-23T01:00:57.6330488Z         	Messages:   	Project creation failed: test-acc-tf-p-4175530731130948700, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:57.6332069Z --- FAIL: TestAccMongoDBEmployeeAccessGrant_invalidExpirationTime (64.82s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS a moment
- 2026-05-26 PASS a moment
- 2026-05-27 PASS a moment
- 2026-05-28 PASS a moment
- 2026-05-29 PASS a moment
- 2026-05-30 PASS a moment
- 2026-05-31: MISSING
- 2026-06-01 PASS a moment
- 2026-06-02 PASS a moment
- 2026-06-03 PASS a moment
- 2026-06-04 PASS a moment
- 2026-06-05 PASS a moment

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a moment
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a moment
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a moment
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a moment
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
