# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:46](#error-2026-07-11t0046380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-07-18 00:45](#error-2026-07-18t0045300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s
[2026-07-21 00:49](#error-2026-07-21t0049320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 36 seconds
- 2026-07-10 PASS 24 seconds
- 2026-07-11

### Error 2026-07-11T00:46:38+00:00
```
2026-07-11T00:46:38.5880539Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-07-11T00:46:38.5881365Z     resource_test.go:121: Creating execution project (1): test-acc-tf-p-6037734887496217012
2026-07-11T00:47:41.2022041Z     resource_test.go:121: 
2026-07-11T00:47:41.2031523Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:47:41.2038716Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:47:41.2043111Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:47:41.2046194Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:128
2026-07-11T00:47:41.2049117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:121
2026-07-11T00:47:41.2050799Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:47:41.2051464Z         	Error:      	Received unexpected error:
2026-07-11T00:47:41.2054059Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:47:41.2056089Z         	Test:       	TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-07-11T00:47:41.2058582Z         	Messages:   	Project creation failed: test-acc-tf-p-6037734887496217012, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:47:41.2060305Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (62.62s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 24 seconds
- 2026-07-14 PASS 25 seconds
- 2026-07-15 PASS 25 seconds
- 2026-07-16 PASS 26 seconds
- 2026-07-17 PASS 24 seconds
- 2026-07-18

### Error 2026-07-18T00:45:30+00:00
```
2026-07-18T00:45:30.2036423Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-07-18T00:45:30.2037179Z     resource_test.go:121: Creating execution project (1): test-acc-tf-p-3164540441629807480
2026-07-18T00:46:31.9945397Z     resource_test.go:121: 
2026-07-18T00:46:31.9947877Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:46:31.9951595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:46:31.9954826Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:46:31.9957925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:128
2026-07-18T00:46:31.9961059Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:121
2026-07-18T00:46:31.9962741Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:46:31.9963315Z         	Error:      	Received unexpected error:
2026-07-18T00:46:31.9965420Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:31.9966747Z         	Test:       	TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-07-18T00:46:31.9968927Z         	Messages:   	Project creation failed: test-acc-tf-p-3164540441629807480, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:46:31.9970549Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (61.79s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:49:32+00:00
```
2026-07-21T00:49:32.8759506Z === RUN   TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-07-21T00:49:32.8761811Z     resource_test.go:121: Creating execution project (1): test-acc-tf-p-2768781870285112249
2026-07-21T00:50:46.7952922Z     resource_test.go:121: 
2026-07-21T00:50:46.7954199Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:50:46.7956057Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:50:46.7958169Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:50:46.7960080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:128
2026-07-21T00:50:46.7961995Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:121
2026-07-21T00:50:46.7963445Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:50:46.7963984Z         	Error:      	Received unexpected error:
2026-07-21T00:50:46.7965924Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:46.7967121Z         	Test:       	TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout
2026-07-21T00:50:46.7968961Z         	Messages:   	Project creation failed: test-acc-tf-p-2768781870285112249, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:46.7970384Z --- FAIL: TestAccPushBasedLogExport_createTimeoutWithDeleteOnCreateTimeout (73.92s)
```

- 2026-07-22 PASS 23 seconds
- 2026-07-23 PASS 25 seconds
- 2026-07-24 PASS 26 seconds
- 2026-07-25 PASS 24 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 26 seconds
- 2026-07-28 PASS 25 seconds
- 2026-07-29 PASS 24 seconds
- 2026-07-30 PASS 26 seconds
- 2026-07-31 PASS 25 seconds
- 2026-08-01 PASS 24 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 26 seconds
- 2026-08-04 PASS 22 seconds
- 2026-08-05 PASS 24 seconds
- 2026-08-06 PASS 23 seconds
- 2026-08-07 PASS 26 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 23 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 24 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 25 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 24 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 26 seconds
  - PASS 26 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 24 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
