# push_based_log_export/pushbasedlogexport/TestAccPushBasedLogExport_noPrefixPath Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:55](#error-2026-05-16t0055380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.01s
[2026-05-19 01:02](#error-2026-05-19t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.01s
[2026-05-23 01:00](#error-2026-05-23t0100110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.03s
[2026-05-28 00:57](#error-2026-05-28t0057590000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-06-02 01:08](#error-2026-06-02t0108510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 53 seconds
- 2026-05-08 PASS 51 seconds
- 2026-05-09 PASS 2 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 56 seconds
- 2026-05-12 PASS a minute
- 2026-05-13 PASS 56 seconds
- 2026-05-14 PASS 51 seconds
- 2026-05-15 PASS 51 seconds
- 2026-05-16

### Error 2026-05-16T00:55:38+00:00
```
2026-05-16T00:55:38.8336762Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-05-16T00:55:38.8337942Z     resource_test.go:68: Creating execution project (1): test-acc-tf-p-8914797601161230230
2026-05-16T00:56:58.9317220Z     resource_test.go:68: 
2026-05-16T00:56:58.9319057Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:56:58.9321995Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:56:58.9324524Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:56:58.9327544Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:75
2026-05-16T00:56:58.9329950Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:68
2026-05-16T00:56:58.9331389Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T00:56:58.9332007Z         	Error:      	Received unexpected error:
2026-05-16T00:56:58.9334181Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:56:58.9335546Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2026-05-16T00:56:58.9337636Z         	Messages:   	Project creation failed: test-acc-tf-p-8914797601161230230, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:56:58.9339175Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (80.10s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 52 seconds
- 2026-05-19

### Error 2026-05-19T01:02:27+00:00
```
2026-05-19T01:02:27.4539588Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-05-19T01:02:27.4540166Z     resource_test.go:68: Creating execution project (1): test-acc-tf-p-1850441217532904384
2026-05-19T01:03:36.5112533Z     resource_test.go:68: 
2026-05-19T01:03:36.5114863Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:03:36.5117143Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:03:36.5119609Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:03:36.5122573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:75
2026-05-19T01:03:36.5125420Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:68
2026-05-19T01:03:36.5127071Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:03:36.5127587Z         	Error:      	Received unexpected error:
2026-05-19T01:03:36.5129502Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:36.5130572Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2026-05-19T01:03:36.5132605Z         	Messages:   	Project creation failed: test-acc-tf-p-1850441217532904384, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:36.5133816Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (69.06s)
```

- 2026-05-20 PASS 51 seconds
- 2026-05-21 PASS 55 seconds
- 2026-05-22 PASS 51 seconds
- 2026-05-23

### Error 2026-05-23T01:00:11+00:00
```
2026-05-23T01:00:11.1902056Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-05-23T01:00:11.1902662Z     resource_test.go:68: Creating execution project (1): test-acc-tf-p-4637857768261569006
2026-05-23T01:01:25.4853582Z     resource_test.go:68: 
2026-05-23T01:01:25.4858615Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:01:25.4864319Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:01:25.4867152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:01:25.4870410Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:75
2026-05-23T01:01:25.4874814Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:68
2026-05-23T01:01:25.4876869Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:01:25.4877718Z         	Error:      	Received unexpected error:
2026-05-23T01:01:25.4879800Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:25.4880923Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2026-05-23T01:01:25.4882740Z         	Messages:   	Project creation failed: test-acc-tf-p-4637857768261569006, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:25.4884299Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (74.30s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 50 seconds
- 2026-05-26 PASS 59 seconds
- 2026-05-27 PASS 51 seconds
- 2026-05-28

### Error 2026-05-28T00:57:59+00:00
```
2026-05-28T00:57:59.7093650Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-05-28T00:57:59.7094310Z     resource_test.go:68: Creating execution project (1): test-acc-tf-p-8837569170839319273
2026-05-28T00:59:02.4448244Z     resource_test.go:68: 
2026-05-28T00:59:02.4453172Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:59:02.4455602Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T00:59:02.4459821Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T00:59:02.4462008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:75
2026-05-28T00:59:02.4463955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:68
2026-05-28T00:59:02.4465802Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T00:59:02.4466349Z         	Error:      	Received unexpected error:
2026-05-28T00:59:02.4468322Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:02.4469414Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2026-05-28T00:59:02.4471182Z         	Messages:   	Project creation failed: test-acc-tf-p-8837569170839319273, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:02.4472343Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (62.74s)
```

- 2026-05-29 PASS 51 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 56 seconds
- 2026-06-02

### Error 2026-06-02T01:08:51+00:00
```
2026-06-02T01:08:51.4660576Z === RUN   TestAccPushBasedLogExport_noPrefixPath
2026-06-02T01:08:51.4661218Z     resource_test.go:68: Creating execution project (1): test-acc-tf-p-5966818976022584910
2026-06-02T01:10:00.4142444Z     resource_test.go:68: 
2026-06-02T01:10:00.4144615Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:10:00.4148752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:10:00.4153028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:10:00.4156409Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:75
2026-06-02T01:10:00.4158849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/pushbasedlogexport/resource_test.go:68
2026-06-02T01:10:00.4160724Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:10:00.4161402Z         	Error:      	Received unexpected error:
2026-06-02T01:10:00.4164245Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:10:00.4166026Z         	Test:       	TestAccPushBasedLogExport_noPrefixPath
2026-06-02T01:10:00.4168918Z         	Messages:   	Project creation failed: test-acc-tf-p-5966818976022584910, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:10:00.4170210Z --- FAIL: TestAccPushBasedLogExport_noPrefixPath (68.95s)
```

- 2026-06-03 PASS 52 seconds
- 2026-06-04 PASS 52 seconds
- 2026-06-05 PASS 58 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 51 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 52 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 51 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 51 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
