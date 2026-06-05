# stream/streamworkspace/TestAccStreamWorkspace_moveInstance Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 8)
Success rate: 77.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.01s
[2026-05-16 01:46](#error-2026-05-16t0146080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.05s
[2026-05-19 02:05](#error-2026-05-19t0205390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.01s
[2026-05-21 01:56](#error-2026-05-21t0156320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.05s
[2026-05-23 02:16](#error-2026-05-23t0216580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.05s
[2026-05-30 02:30](#error-2026-05-30t0230490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.08s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 37 seconds
  - PASS 4 seconds
- 2026-05-08 PASS 3 seconds
- 2026-05-09
  - PASS 3 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1600691Z === RUN   TestAccStreamWorkspace_moveInstance
2026-05-09T01:47:38.1601296Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-854798611033230981
2026-05-09T01:47:38.1601978Z     move_state_test.go:15: 
2026-05-09T01:47:38.1602925Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1604740Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1606554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1608575Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-05-09T01:47:38.1609418Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1611370Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1612566Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-05-09T01:47:38.1614333Z         	Messages:   	Project creation failed: test-acc-tf-p-854798611033230981, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1615540Z --- FAIL: TestAccStreamWorkspace_moveInstance (105.13s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12 PASS 45 seconds
- 2026-05-13 PASS 3 seconds
- 2026-05-14 PASS 5 seconds
- 2026-05-15 PASS 3 seconds
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.1195438Z === RUN   TestAccStreamWorkspace_moveInstance
2026-05-16T01:46:08.1196030Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-5862821356368858052
2026-05-16T01:46:08.1196538Z     move_state_test.go:15: 
2026-05-16T01:46:08.1197455Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.1199282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.1201093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.1203130Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-05-16T01:46:08.1203955Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.1205919Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.1206972Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-05-16T01:46:08.1208919Z         	Messages:   	Project creation failed: test-acc-tf-p-5862821356368858052, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.1210130Z --- FAIL: TestAccStreamWorkspace_moveInstance (87.53s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 3 seconds
- 2026-05-19

### Error 2026-05-19T02:05:39+00:00
```
2026-05-19T02:05:39.1878044Z === RUN   TestAccStreamWorkspace_moveInstance
2026-05-19T02:05:39.1878614Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-2648062462240394683
2026-05-19T02:05:39.1879089Z     move_state_test.go:15: 
2026-05-19T02:05:39.1879939Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T02:05:39.1881651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T02:05:39.1883457Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T02:05:39.1885197Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-05-19T02:05:39.1885952Z         	Error:      	Received unexpected error:
2026-05-19T02:05:39.1887719Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1888693Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-05-19T02:05:39.1890294Z         	Messages:   	Project creation failed: test-acc-tf-p-2648062462240394683, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1891415Z --- FAIL: TestAccStreamWorkspace_moveInstance (77.13s)
```

- 2026-05-20
  - PASS 3 seconds
  - PASS 6 seconds
- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6800021Z === RUN   TestAccStreamWorkspace_moveInstance
2026-05-21T01:56:32.6800657Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-2969428784333498901
2026-05-21T01:56:32.6801164Z     move_state_test.go:15: 
2026-05-21T01:56:32.6802133Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:56:32.6803951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:56:32.6805843Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:56:32.6807744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-05-21T01:56:32.6808596Z         	Error:      	Received unexpected error:
2026-05-21T01:56:32.6810536Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:56:32.6811558Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-05-21T01:56:32.6813258Z         	Messages:   	Project creation failed: test-acc-tf-p-2969428784333498901, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:56:32.6814402Z --- FAIL: TestAccStreamWorkspace_moveInstance (83.52s)
```

- 2026-05-22 PASS 4 seconds
- 2026-05-23

### Error 2026-05-23T02:16:58+00:00
```
2026-05-23T02:16:58.5336489Z === RUN   TestAccStreamWorkspace_moveInstance
2026-05-23T02:16:58.5337100Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-3322789409938333012
2026-05-23T02:16:58.5337747Z     move_state_test.go:15: 
2026-05-23T02:16:58.5338677Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T02:16:58.5340481Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T02:16:58.5342290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T02:16:58.5344314Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-05-23T02:16:58.5345133Z         	Error:      	Received unexpected error:
2026-05-23T02:16:58.5347110Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:16:58.5348155Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-05-23T02:16:58.5350273Z         	Messages:   	Project creation failed: test-acc-tf-p-3322789409938333012, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:16:58.5351481Z --- FAIL: TestAccStreamWorkspace_moveInstance (62.34s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 4 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 4 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5754452Z === RUN   TestAccStreamWorkspace_moveInstance
2026-05-28T02:40:17.5755039Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-8818766703143842829
2026-05-28T02:40:17.5755545Z     move_state_test.go:15: 
2026-05-28T02:40:17.5756463Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5758693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5760515Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5762412Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-05-28T02:40:17.5763232Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5765175Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5766239Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-05-28T02:40:17.5768201Z         	Messages:   	Project creation failed: test-acc-tf-p-8818766703143842829, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5769577Z --- FAIL: TestAccStreamWorkspace_moveInstance (94.50s)
```

- 2026-05-29 PASS 4 seconds
- 2026-05-30

### Error 2026-05-30T02:30:49+00:00
```
2026-05-30T02:30:49.6873803Z === RUN   TestAccStreamWorkspace_moveInstance
2026-05-30T02:30:49.6874449Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-4525817832123116893
2026-05-30T02:30:49.6874993Z     move_state_test.go:15: 
2026-05-30T02:30:49.6875938Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T02:30:49.6877762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T02:30:49.6879775Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T02:30:49.6881930Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-05-30T02:30:49.6882826Z         	Error:      	Received unexpected error:
2026-05-30T02:30:49.6884847Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6885910Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-05-30T02:30:49.6887814Z         	Messages:   	Project creation failed: test-acc-tf-p-4525817832123116893, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6889023Z --- FAIL: TestAccStreamWorkspace_moveInstance (98.78s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5866865Z === RUN   TestAccStreamWorkspace_moveInstance
2026-06-02T01:54:34.5867451Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-2412139943077481601
2026-06-02T01:54:34.5867952Z     move_state_test.go:15: 
2026-06-02T01:54:34.5868841Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5870514Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5872190Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5873970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-06-02T01:54:34.5874749Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5876615Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5877614Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-06-02T01:54:34.5879251Z         	Messages:   	Project creation failed: test-acc-tf-p-2412139943077481601, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5880472Z --- FAIL: TestAccStreamWorkspace_moveInstance (72.59s)
```

- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 5 seconds
- 2026-06-05 PASS 3 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 3 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 3 seconds
- 2026-05-25 PASS 3 seconds
- 2026-05-26 PASS 3 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 3 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
