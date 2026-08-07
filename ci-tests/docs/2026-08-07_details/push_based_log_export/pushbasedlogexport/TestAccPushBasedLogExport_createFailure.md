# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_createFailure Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:45](#error-2026-07-11t0045210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.05s
[2026-07-18 00:44](#error-2026-07-18t0044160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.07s
[2026-07-21 00:47](#error-2026-07-21t0047520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 5 seconds
- 2026-07-10 PASS a moment
- 2026-07-11

### Error 2026-07-11T00:45:21+00:00
```
2026-07-11T00:45:21.0490223Z === RUN   TestAccPushBasedLogExport_createFailure
2026-07-11T00:45:21.0491044Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-3304300274208168903
2026-07-11T00:46:38.5849497Z     resource_test.go:98: 
2026-07-11T00:46:38.5852555Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:46:38.5860068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:46:38.5864327Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:46:38.5867217Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:104
2026-07-11T00:46:38.5869847Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:98
2026-07-11T00:46:38.5871450Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:46:38.5872122Z         	Error:      	Received unexpected error:
2026-07-11T00:46:38.5874660Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:38.5876342Z         	Test:       	TestAccPushBasedLogExport_createFailure
2026-07-11T00:46:38.5878519Z         	Messages:   	Project creation failed: test-acc-tf-p-3304300274208168903, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:38.5879961Z --- FAIL: TestAccPushBasedLogExport_createFailure (77.54s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a moment
- 2026-07-14 PASS a second
- 2026-07-15 PASS a moment
- 2026-07-16 PASS a second
- 2026-07-17 PASS a moment
- 2026-07-18

### Error 2026-07-18T00:44:16+00:00
```
2026-07-18T00:44:16.5305642Z === RUN   TestAccPushBasedLogExport_createFailure
2026-07-18T00:44:16.5306241Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-7403619265016127044
2026-07-18T00:45:30.2009783Z     resource_test.go:98: 
2026-07-18T00:45:30.2011999Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:45:30.2016175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:45:30.2019967Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:45:30.2023282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:104
2026-07-18T00:45:30.2026519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:98
2026-07-18T00:45:30.2027951Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:45:30.2028562Z         	Error:      	Received unexpected error:
2026-07-18T00:45:30.2031110Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:45:30.2032376Z         	Test:       	TestAccPushBasedLogExport_createFailure
2026-07-18T00:45:30.2034448Z         	Messages:   	Project creation failed: test-acc-tf-p-7403619265016127044, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:45:30.2035867Z --- FAIL: TestAccPushBasedLogExport_createFailure (73.67s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:52+00:00
```
2026-07-21T00:47:52.9962261Z === RUN   TestAccPushBasedLogExport_createFailure
2026-07-21T00:47:52.9962989Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-2839156289537923706
2026-07-21T00:49:32.8738771Z     resource_test.go:98: 
2026-07-21T00:49:32.8740225Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:49:32.8742495Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:49:32.8744711Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:49:32.8747089Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:104
2026-07-21T00:49:32.8749477Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:98
2026-07-21T00:49:32.8750952Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:49:32.8751539Z         	Error:      	Received unexpected error:
2026-07-21T00:49:32.8753949Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:32.8755374Z         	Test:       	TestAccPushBasedLogExport_createFailure
2026-07-21T00:49:32.8757515Z         	Messages:   	Project creation failed: test-acc-tf-p-2839156289537923706, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:32.8758872Z --- FAIL: TestAccPushBasedLogExport_createFailure (99.88s)
```

- 2026-07-22 PASS a moment
- 2026-07-23 PASS a second
- 2026-07-24 PASS a moment
- 2026-07-25 PASS a moment
- 2026-07-26: MISSING
- 2026-07-27 PASS a moment
- 2026-07-28 PASS a moment
- 2026-07-29 PASS a second
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
