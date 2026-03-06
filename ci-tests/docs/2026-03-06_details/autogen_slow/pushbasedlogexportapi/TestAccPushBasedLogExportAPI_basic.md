# autogen_slow/pushbasedlogexportapi/TestAccPushBasedLogExportAPI_basic Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-05 01:23](#error-2026-03-05t0123540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS a minute
- 2026-02-06 PASS a minute
- 2026-02-07 PASS a minute
- 2026-02-08: MISSING
- 2026-02-09 PASS a minute
- 2026-02-10 PASS a minute
- 2026-02-11 PASS a minute
- 2026-02-12 PASS a minute
- 2026-02-13 PASS a minute
- 2026-02-14 PASS a minute
- 2026-02-15: MISSING
- 2026-02-16 PASS a minute
- 2026-02-17 PASS a minute
- 2026-02-18 PASS a minute
- 2026-02-19 PASS a minute
- 2026-02-20 PASS a minute
- 2026-02-21 PASS a minute
- 2026-02-22: MISSING
- 2026-02-23 PASS a minute
- 2026-02-24 PASS a minute
- 2026-02-25 PASS a minute
- 2026-02-26 PASS a minute
- 2026-02-27 PASS a minute
- 2026-02-28 PASS a minute
- 2026-03-01: MISSING
- 2026-03-02
  - PASS a minute
  - PASS a minute
- 2026-03-03 PASS 2 minutes
- 2026-03-04 PASS a minute
- 2026-03-05

### Error 2026-03-05T01:23:54+00:00
```
2026-03-05T01:23:54.1120931Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-03-05T01:23:54.1123056Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-2752959553777878343
2026-03-05T01:23:54.1123606Z     resource_test.go:21: 
2026-03-05T01:23:54.1124502Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-03-05T01:23:54.1126537Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-03-05T01:23:54.1128500Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-03-05T01:23:54.1130404Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-03-05T01:23:54.1132450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-03-05T01:23:54.1133651Z         	            				/opt/hostedtoolcache/go/1.26.0/x64/src/runtime/asm_amd64.s:1771
2026-03-05T01:23:54.1134139Z         	Error:      	Received unexpected error:
2026-03-05T01:23:54.1136113Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T01:23:54.1137145Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-03-05T01:23:54.1138850Z         	Messages:   	Project creation failed: test-acc-tf-p-2752959553777878343, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T01:23:54.1140032Z --- FAIL: TestAccPushBasedLogExportAPI_basic (62.80s)
```

- 2026-03-06 PASS a minute

## QA Environment
### Timeline
- 2026-02-04 PASS a minute
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS a minute
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS a minute
- 2026-02-16: MISSING
- 2026-02-17
  - PASS a minute
  - PASS a minute
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS a minute
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS a minute
- 2026-03-02 PASS a minute
- 2026-03-03 PASS a minute
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
