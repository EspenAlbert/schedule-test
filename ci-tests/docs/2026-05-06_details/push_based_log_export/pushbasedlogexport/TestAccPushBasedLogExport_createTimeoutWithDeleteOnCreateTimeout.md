# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 00:59](#error-2026-04-30t0059170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 24 seconds
- 2026-04-08 PASS 24 seconds
- 2026-04-09 PASS a minute
- 2026-04-10 PASS 26 seconds
- 2026-04-11 PASS 27 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 28 seconds
- 2026-04-14 PASS 24 seconds
- 2026-04-15 PASS 24 seconds
- 2026-04-16 PASS 24 seconds
- 2026-04-17 PASS 24 seconds
- 2026-04-18 PASS 24 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 27 seconds
- 2026-04-21 PASS 26 seconds
- 2026-04-22 PASS 24 seconds
- 2026-04-23 PASS 27 seconds
- 2026-04-24 PASS 24 seconds
- 2026-04-25 PASS 24 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 24 seconds
- 2026-04-28 PASS 24 seconds
- 2026-04-29 PASS 27 seconds
- 2026-04-30

### Error 2026-04-30T00:59:17+00:00
```
2026-04-30T00:59:17.7931565Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-04-30T00:59:17.7932777Z     resource_test.go:121: Creating execution project (1): test-acc-tf-p-6309583695501944501
2026-04-30T01:00:21.0112238Z     resource_test.go:121: 
2026-04-30T01:00:21.0114029Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:00:21.0115768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:00:21.0117393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:00:21.0119411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:128
2026-04-30T01:00:21.0121344Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:121
2026-04-30T01:00:21.0122463Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:00:21.0122946Z         	Error:      	Received unexpected error:
2026-04-30T01:00:21.0124679Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:21.0125806Z         	Test:       	TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-04-30T01:00:21.0127480Z         	Messages:   	Project creation failed: test-acc-tf-p-6309583695501944501, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:21.0128701Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (63.22s)
```

- 2026-05-01 PASS 23 seconds
- 2026-05-02 PASS 24 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 27 seconds
- 2026-05-05 PASS 24 seconds
- 2026-05-06 PASS 27 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 27 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 27 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 23 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 27 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 25 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 27 seconds
- 2026-05-04 PASS 24 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 23 seconds
