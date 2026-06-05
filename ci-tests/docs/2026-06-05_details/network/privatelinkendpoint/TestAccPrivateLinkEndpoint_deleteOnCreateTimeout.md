# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_deleteOnCreateTimeout Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:23](#error-2026-05-09t0123390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 111.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-05-08 PASS 3 seconds
- 2026-05-09

### Error 2026-05-09T01:23:39+00:00
```
2026-05-09T01:23:39.1289166Z === RUN   TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-05-09T01:23:39.1289811Z     resource_test.go:110: Creating execution project (1): test-acc-tf-p-1045320187492845154
2026-05-09T01:23:39.1290325Z     resource_test.go:110: 
2026-05-09T01:23:39.1291417Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:23:39.1293323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:23:39.1295220Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:23:39.1297235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:110
2026-05-09T01:23:39.1298383Z         	Error:      	Received unexpected error:
2026-05-09T01:23:39.1300424Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1301576Z         	Test:       	TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-05-09T01:23:39.1303449Z         	Messages:   	Project creation failed: test-acc-tf-p-1045320187492845154, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1304882Z --- FAIL: TestAccPrivateLinkEndpoint_deleteOnCreateTimeout (111.23s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 3 seconds
- 2026-05-12 PASS 3 seconds
- 2026-05-13 PASS 2 seconds
- 2026-05-14 PASS 2 seconds
- 2026-05-15 PASS 2 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS 2 seconds
- 2026-05-19 PASS 2 seconds
- 2026-05-20 PASS 2 seconds
- 2026-05-21 PASS 2 seconds
- 2026-05-22 PASS 2 seconds
- 2026-05-23 PASS 2 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 2 seconds
- 2026-05-26 PASS 2 seconds
- 2026-05-27 PASS 2 seconds
- 2026-05-28 PASS 2 seconds
- 2026-05-29 PASS 2 seconds
- 2026-05-30 PASS 2 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 2 seconds
- 2026-06-02 PASS 2 seconds
- 2026-06-03 PASS 2 seconds
- 2026-06-04 PASS 2 seconds
- 2026-06-05 PASS 2 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 3 seconds
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
