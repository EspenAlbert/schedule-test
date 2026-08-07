# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_noPrefixPath Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:44](#error-2026-07-11t0044180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-07-18 00:43](#error-2026-07-18t0043070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.03s
[2026-07-21 00:46](#error-2026-07-21t0046220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS a minute
- 2026-07-10 PASS 50 seconds
- 2026-07-11

### Error 2026-07-11T00:44:18+00:00
```
2026-07-11T00:44:18.6952182Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-07-11T00:44:18.6952817Z     resource_test.go:68: Creating execution project (1): test-acc-tf-p-1513286979952034765
2026-07-11T00:45:21.0458297Z     resource_test.go:68: 
2026-07-11T00:45:21.0461362Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:21.0466344Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:21.0469307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:21.0472570Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:75
2026-07-11T00:45:21.0475866Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:68
2026-07-11T00:45:21.0477705Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:45:21.0478428Z         	Error:      	Received unexpected error:
2026-07-11T00:45:21.0481267Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:21.0484801Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2026-07-11T00:45:21.0487951Z         	Messages:   	Project creation failed: test-acc-tf-p-1513286979952034765, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:21.0489671Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (62.35s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 52 seconds
- 2026-07-14 PASS 55 seconds
- 2026-07-15 PASS 53 seconds
- 2026-07-16 PASS 57 seconds
- 2026-07-17 PASS 52 seconds
- 2026-07-18

### Error 2026-07-18T00:43:07+00:00
```
2026-07-18T00:43:07.2152433Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-07-18T00:43:07.2153086Z     resource_test.go:68: Creating execution project (1): test-acc-tf-p-4032613891942484823
2026-07-18T00:44:16.5273228Z     resource_test.go:68: 
2026-07-18T00:44:16.5277883Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:44:16.5283076Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:44:16.5285549Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:44:16.5287584Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:75
2026-07-18T00:44:16.5289802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:68
2026-07-18T00:44:16.5291071Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:44:16.5291617Z         	Error:      	Received unexpected error:
2026-07-18T00:44:16.5296719Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:16.5300407Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2026-07-18T00:44:16.5303985Z         	Messages:   	Project creation failed: test-acc-tf-p-4032613891942484823, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:16.5305221Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (69.31s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:22+00:00
```
2026-07-21T00:46:22.8371074Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-07-21T00:46:22.8371676Z     resource_test.go:68: Creating execution project (1): test-acc-tf-p-3563037232842845345
2026-07-21T00:47:52.9939346Z     resource_test.go:68: 
2026-07-21T00:47:52.9942129Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:47:52.9946658Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:47:52.9949424Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:47:52.9952024Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:75
2026-07-21T00:47:52.9954102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:68
2026-07-21T00:47:52.9955310Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:47:52.9955864Z         	Error:      	Received unexpected error:
2026-07-21T00:47:52.9957855Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:52.9958943Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2026-07-21T00:47:52.9960687Z         	Messages:   	Project creation failed: test-acc-tf-p-3563037232842845345, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:52.9961839Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (90.16s)
```

- 2026-07-22 PASS 51 seconds
- 2026-07-23 PASS 56 seconds
- 2026-07-24 PASS 54 seconds
- 2026-07-25 PASS 51 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 56 seconds
- 2026-07-28 PASS 53 seconds
- 2026-07-29 PASS 51 seconds
- 2026-07-30 PASS 54 seconds
- 2026-07-31 PASS 52 seconds
- 2026-08-01 PASS 50 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 55 seconds
- 2026-08-04 PASS 47 seconds
- 2026-08-05 PASS 51 seconds
- 2026-08-06 PASS 51 seconds
- 2026-08-07 PASS 55 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 51 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 52 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 52 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 51 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 54 seconds
  - PASS 55 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 51 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
