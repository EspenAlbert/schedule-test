# stream/streamworkspace/TestAccStreamWorkspace_moveInstance Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.03s
[2026-07-16 03:32](#error-2026-07-16t0332120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 108.09s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.06s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 97.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6542998Z === RUN   TestAccStreamWorkspace_moveInstance
2026-07-09T01:15:21.6543599Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-7810794656965691741
2026-07-09T01:15:21.6544005Z     move_state_test.go:15: 
2026-07-09T01:15:21.6544714Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6546173Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6547534Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6548995Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-07-09T01:15:21.6549634Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6551135Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6551940Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-07-09T01:15:21.6553268Z         	Messages:   	Project creation failed: test-acc-tf-p-7810794656965691741, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6554161Z --- FAIL: TestAccStreamWorkspace_moveInstance (64.47s)
```

- 2026-07-10 PASS 4 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7925571Z === RUN   TestAccStreamWorkspace_moveInstance
2026-07-11T01:30:51.7926197Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-2518640852679585599
2026-07-11T01:30:51.7926721Z     move_state_test.go:15: 
2026-07-11T01:30:51.7927664Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7929785Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7931633Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7933705Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-07-11T01:30:51.7934558Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7936541Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7937621Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-07-11T01:30:51.7939598Z         	Messages:   	Project creation failed: test-acc-tf-p-2518640852679585599, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7940837Z --- FAIL: TestAccStreamWorkspace_moveInstance (90.33s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 seconds
- 2026-07-14 PASS 5 seconds
- 2026-07-15 PASS 7 seconds
- 2026-07-16

### Error 2026-07-16T03:32:12+00:00
```
2026-07-16T03:32:12.6586586Z === RUN   TestAccStreamWorkspace_moveInstance
2026-07-16T03:32:12.6587198Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-403904331370777014
2026-07-16T03:32:12.6587713Z     move_state_test.go:15: 
2026-07-16T03:32:12.6588643Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T03:32:12.6590454Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T03:32:12.6592277Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T03:32:12.6594174Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-07-16T03:32:12.6595452Z         	Error:      	Received unexpected error:
2026-07-16T03:32:12.6597401Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6598474Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-07-16T03:32:12.6600243Z         	Messages:   	Project creation failed: test-acc-tf-p-403904331370777014, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6601452Z --- FAIL: TestAccStreamWorkspace_moveInstance (108.90s)
```

- 2026-07-17 PASS 3 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0803879Z === RUN   TestAccStreamWorkspace_moveInstance
2026-07-18T01:45:13.0805118Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-602639155177864520
2026-07-18T01:45:13.0805989Z     move_state_test.go:15: 
2026-07-18T01:45:13.0807584Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0810843Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0814142Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0817965Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-07-18T01:45:13.0819680Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0823139Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0825221Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-07-18T01:45:13.0828448Z         	Messages:   	Project creation failed: test-acc-tf-p-602639155177864520, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0830573Z --- FAIL: TestAccStreamWorkspace_moveInstance (88.65s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3982712Z === RUN   TestAccStreamWorkspace_moveInstance
2026-07-21T00:59:13.3983397Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-351029203936997211
2026-07-21T00:59:13.3984038Z     move_state_test.go:15: 
2026-07-21T00:59:13.3984990Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3986864Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3988880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3990836Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-07-21T00:59:13.3991681Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3993816Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3995070Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-07-21T00:59:13.3997035Z         	Messages:   	Project creation failed: test-acc-tf-p-351029203936997211, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3998276Z --- FAIL: TestAccStreamWorkspace_moveInstance (62.89s)
```

- 2026-07-22 PASS 4 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6466809Z === RUN   TestAccStreamWorkspace_moveInstance
2026-07-23T03:35:04.6467550Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-8593900203465648922
2026-07-23T03:35:04.6468078Z     move_state_test.go:15: 
2026-07-23T03:35:04.6469016Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6470825Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6482342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6484274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-07-23T03:35:04.6485118Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6487101Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.6488366Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-07-23T03:35:04.6490203Z         	Messages:   	Project creation failed: test-acc-tf-p-8593900203465648922, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.6491395Z --- FAIL: TestAccStreamWorkspace_moveInstance (97.60s)
```

- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 3 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 3 seconds
- 2026-07-29 PASS 3 seconds
- 2026-07-30 PASS 3 seconds
- 2026-07-31 PASS 4 seconds
- 2026-08-01 PASS 4 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 5 seconds
  - PASS 3 seconds
  - PASS 6 seconds
- 2026-08-04 PASS 3 seconds
- 2026-08-05 PASS 4 seconds
- 2026-08-06 PASS 3 seconds
- 2026-08-07 PASS 4 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 4 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 5 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 4 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
