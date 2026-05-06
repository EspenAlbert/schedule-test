# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createFailure Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.08s
[2026-04-30 00:57](#error-2026-04-30t0057230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 114.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a moment
- 2026-04-08 PASS a moment
- 2026-04-09

### Error 2026-04-09T00:40:41+00:00
```
2026-04-09T00:40:41.2048015Z === RUN   TestAccPushBasedLogExport_createFailure
2026-04-09T00:40:41.2048605Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-2869725607441257851
2026-04-09T00:41:57.0315313Z     resource_test.go:98: 
2026-04-09T00:41:57.0317502Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:41:57.0320095Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:41:57.0322616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:41:57.0325089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:104
2026-04-09T00:41:57.0327125Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:98
2026-04-09T00:41:57.0328373Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T00:41:57.0328898Z         	Error:      	Received unexpected error:
2026-04-09T00:41:57.0330900Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:57.0332010Z         	Test:       	TestAccPushBasedLogExport_createFailure
2026-04-09T00:41:57.0333837Z         	Messages:   	Project creation failed: test-acc-tf-p-2869725607441257851, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:41:57.0335183Z --- FAIL: TestAccPushBasedLogExport_createFailure (75.83s)
```

- 2026-04-10 PASS a second
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS a second
- 2026-04-14 PASS a moment
- 2026-04-15 PASS a moment
- 2026-04-16 PASS a moment
- 2026-04-17 PASS a moment
- 2026-04-18 PASS a moment
- 2026-04-19: MISSING
- 2026-04-20 PASS a moment
- 2026-04-21 PASS a moment
- 2026-04-22 PASS a moment
- 2026-04-23 PASS a second
- 2026-04-24 PASS a moment
- 2026-04-25 PASS a moment
- 2026-04-26: MISSING
- 2026-04-27 PASS a moment
- 2026-04-28 PASS a moment
- 2026-04-29 PASS a second
- 2026-04-30

### Error 2026-04-30T00:57:23+00:00
```
2026-04-30T00:57:23.2051870Z === RUN   TestAccPushBasedLogExport_createFailure
2026-04-30T00:57:23.2052537Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-2396288724325279936
2026-04-30T00:59:17.7901120Z     resource_test.go:98: 
2026-04-30T00:59:17.7902866Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:59:17.7905945Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:59:17.7909300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:59:17.7912831Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:104
2026-04-30T00:59:17.7916323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:98
2026-04-30T00:59:17.7918552Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T00:59:17.7919472Z         	Error:      	Received unexpected error:
2026-04-30T00:59:17.7923218Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:59:17.7925247Z         	Test:       	TestAccPushBasedLogExport_createFailure
2026-04-30T00:59:17.7928412Z         	Messages:   	Project creation failed: test-acc-tf-p-2396288724325279936, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:59:17.7930600Z --- FAIL: TestAccPushBasedLogExport_createFailure (114.59s)
```

- 2026-05-01 PASS a moment
- 2026-05-02 PASS a moment
- 2026-05-03: MISSING
- 2026-05-04 PASS a second
- 2026-05-05 PASS a second
- 2026-05-06 PASS a moment

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a moment
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a second
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a moment
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a moment
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
- 2026-05-03 PASS a moment
- 2026-05-04 PASS a moment
- 2026-05-05: MISSING
- 2026-05-06 PASS a moment
