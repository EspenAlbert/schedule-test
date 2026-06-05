# autogen_slow/clusterapi/TestAccClusterAPI_moveBasic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 19) FAIL(x 12)
Success rate: 61.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:02](#error-2026-05-09t0102470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.03s
[2026-05-12 01:24](#error-2026-05-12t0124120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.10s
[2026-05-14 01:49](#error-2026-05-14t0149220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.03s
[2026-05-16 01:10](#error-2026-05-16t0110490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-05-19 01:06](#error-2026-05-19t0106130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.08s
[2026-05-21 01:27](#error-2026-05-21t0127270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.08s
[2026-05-23 01:35](#error-2026-05-23t0135220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.06s
[2026-05-26 02:15](#error-2026-05-26t0215080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.05s
[2026-05-28 01:01](#error-2026-05-28t0101280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.10s
[2026-05-30 01:05](#error-2026-05-30t0105140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.09s
[2026-06-02 01:14](#error-2026-06-02t0114070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 37 minutes
  - PASS 51 minutes
- 2026-05-08 PASS 21 minutes
- 2026-05-09

### Error 2026-05-09T01:02:47+00:00
```
2026-05-09T01:02:47.9476719Z === RUN   TestAccClusterAPI_moveBasic
2026-05-09T01:02:47.9480942Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-8633352107907482988
2026-05-09T01:02:47.9481708Z     move_test.go:18: 
2026-05-09T01:02:47.9482648Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:02:47.9484434Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:02:47.9486556Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:02:47.9488333Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-05-09T01:02:47.9489094Z         	Error:      	Received unexpected error:
2026-05-09T01:02:47.9491464Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:47.9492502Z         	Test:       	TestAccClusterAPI_moveBasic
2026-05-09T01:02:47.9494430Z         	Messages:   	Project creation failed: test-acc-tf-p-8633352107907482988, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:47.9495545Z --- FAIL: TestAccClusterAPI_moveBasic (88.27s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 22 minutes
- 2026-05-12

### Error 2026-05-12T01:24:12+00:00
```
2026-05-12T01:24:12.2054606Z === RUN   TestAccClusterAPI_moveBasic
2026-05-12T01:24:12.2055727Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-8446149900658090296
2026-05-12T01:24:12.2056248Z     move_test.go:18: 
2026-05-12T01:24:12.2057159Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-12T01:24:12.2059004Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-12T01:24:12.2060820Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-12T01:24:12.2063796Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-05-12T01:24:12.2064592Z         	Error:      	Received unexpected error:
2026-05-12T01:24:12.2066515Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T01:24:12.2067615Z         	Test:       	TestAccClusterAPI_moveBasic
2026-05-12T01:24:12.2069619Z         	Messages:   	Project creation failed: test-acc-tf-p-8446149900658090296, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T01:24:12.2070797Z --- FAIL: TestAccClusterAPI_moveBasic (66.98s)
```

- 2026-05-13 PASS 20 minutes
- 2026-05-14

### Error 2026-05-14T01:49:22+00:00
```
2026-05-14T01:49:22.3426413Z === RUN   TestAccClusterAPI_moveBasic
2026-05-14T01:49:22.3427352Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-7047187579587719258
2026-05-14T01:49:22.3427962Z     move_test.go:18: 
2026-05-14T01:49:22.3429208Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-14T01:49:22.3431833Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-14T01:49:22.3434862Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-14T01:49:22.3437835Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-05-14T01:49:22.3439105Z         	Error:      	Received unexpected error:
2026-05-14T01:49:22.3441833Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:49:22.3442849Z         	Test:       	TestAccClusterAPI_moveBasic
2026-05-14T01:49:22.3445246Z         	Messages:   	Project creation failed: test-acc-tf-p-7047187579587719258, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:49:22.3446410Z --- FAIL: TestAccClusterAPI_moveBasic (68.29s)
```

- 2026-05-15 PASS 18 minutes
- 2026-05-16

### Error 2026-05-16T01:10:49+00:00
```
2026-05-16T01:10:49.6343086Z === RUN   TestAccClusterAPI_moveBasic
2026-05-16T01:10:49.6344045Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-451550091592639324
2026-05-16T01:10:49.6344805Z     move_test.go:18: 
2026-05-16T01:10:49.6346014Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:10:49.6347931Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:10:49.6349727Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:10:49.6351550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-05-16T01:10:49.6352362Z         	Error:      	Received unexpected error:
2026-05-16T01:10:49.6354286Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:10:49.6355276Z         	Test:       	TestAccClusterAPI_moveBasic
2026-05-16T01:10:49.6357610Z         	Messages:   	Project creation failed: test-acc-tf-p-451550091592639324, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:10:49.6358725Z --- FAIL: TestAccClusterAPI_moveBasic (64.75s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 30 minutes
- 2026-05-19

### Error 2026-05-19T01:06:13+00:00
```
2026-05-19T01:06:13.4518530Z === RUN   TestAccClusterAPI_moveBasic
2026-05-19T01:06:13.4519237Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-321467974544120171
2026-05-19T01:06:13.4522077Z     move_test.go:18: 
2026-05-19T01:06:13.4523118Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:06:13.4525374Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:06:13.4527529Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:06:13.4529903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-05-19T01:06:13.4530994Z         	Error:      	Received unexpected error:
2026-05-19T01:06:13.4532511Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:13.4533296Z         	Test:       	TestAccClusterAPI_moveBasic
2026-05-19T01:06:13.4535421Z         	Messages:   	Project creation failed: test-acc-tf-p-321467974544120171, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:13.4536315Z --- FAIL: TestAccClusterAPI_moveBasic (72.75s)
```

- 2026-05-20 PASS 21 minutes
- 2026-05-21

### Error 2026-05-21T01:27:27+00:00
```
2026-05-21T01:27:27.5696213Z === RUN   TestAccClusterAPI_moveBasic
2026-05-21T01:27:27.5697295Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-8267845238601199028
2026-05-21T01:27:27.5697806Z     move_test.go:18: 
2026-05-21T01:27:27.5698765Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:27:27.5700582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:27:27.5702322Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:27:27.5704404Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-05-21T01:27:27.5705189Z         	Error:      	Received unexpected error:
2026-05-21T01:27:27.5707090Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:27:27.5708070Z         	Test:       	TestAccClusterAPI_moveBasic
2026-05-21T01:27:27.5709991Z         	Messages:   	Project creation failed: test-acc-tf-p-8267845238601199028, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:27:27.5711076Z --- FAIL: TestAccClusterAPI_moveBasic (70.82s)
```

- 2026-05-22 PASS 39 minutes
- 2026-05-23

### Error 2026-05-23T01:35:22+00:00
```
2026-05-23T01:35:22.2995269Z === RUN   TestAccClusterAPI_moveBasic
2026-05-23T01:35:22.2996507Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-7484141362405141223
2026-05-23T01:35:22.2997026Z     move_test.go:18: 
2026-05-23T01:35:22.2998041Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:35:22.3000094Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:35:22.3002151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:35:22.3004858Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-05-23T01:35:22.3005738Z         	Error:      	Received unexpected error:
2026-05-23T01:35:22.3007939Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:35:22.3009115Z         	Test:       	TestAccClusterAPI_moveBasic
2026-05-23T01:35:22.3011194Z         	Messages:   	Project creation failed: test-acc-tf-p-7484141362405141223, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:35:22.3012415Z --- FAIL: TestAccClusterAPI_moveBasic (72.63s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 23 minutes
- 2026-05-26

### Error 2026-05-26T02:15:08+00:00
```
2026-05-26T02:15:08.3708998Z === RUN   TestAccClusterAPI_moveBasic
2026-05-26T02:15:08.3710171Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-7230189306015249441
2026-05-26T02:15:08.3710817Z     move_test.go:18: 
2026-05-26T02:15:08.3712291Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:15:08.3714396Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:15:08.3716176Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:15:08.3717939Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-05-26T02:15:08.3718706Z         	Error:      	Received unexpected error:
2026-05-26T02:15:08.3720619Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:08.3722026Z         	Test:       	TestAccClusterAPI_moveBasic
2026-05-26T02:15:08.3723971Z         	Messages:   	Project creation failed: test-acc-tf-p-7230189306015249441, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:08.3725066Z --- FAIL: TestAccClusterAPI_moveBasic (92.46s)
```

- 2026-05-27 PASS 46 minutes
- 2026-05-28

### Error 2026-05-28T01:01:28+00:00
```
2026-05-28T01:01:28.8735970Z === RUN   TestAccClusterAPI_moveBasic
2026-05-28T01:01:28.8736809Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-1284839636629014060
2026-05-28T01:01:28.8737549Z     move_test.go:18: 
2026-05-28T01:01:28.8738856Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:28.8740604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:28.8742633Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:28.8744385Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-05-28T01:01:28.8745156Z         	Error:      	Received unexpected error:
2026-05-28T01:01:28.8747017Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:28.8748103Z         	Test:       	TestAccClusterAPI_moveBasic
2026-05-28T01:01:28.8750083Z         	Messages:   	Project creation failed: test-acc-tf-p-1284839636629014060, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:28.8751209Z --- FAIL: TestAccClusterAPI_moveBasic (87.97s)
```

- 2026-05-29 PASS 20 minutes
- 2026-05-30

### Error 2026-05-30T01:05:14+00:00
```
2026-05-30T01:05:14.4751660Z === RUN   TestAccClusterAPI_moveBasic
2026-05-30T01:05:14.4754331Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-4335645114554746544
2026-05-30T01:05:14.4755548Z     move_test.go:18: 
2026-05-30T01:05:14.4756540Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:05:14.4758399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:05:14.4760245Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:05:14.4762339Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-05-30T01:05:14.4763135Z         	Error:      	Received unexpected error:
2026-05-30T01:05:14.4765243Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:05:14.4766277Z         	Test:       	TestAccClusterAPI_moveBasic
2026-05-30T01:05:14.4768257Z         	Messages:   	Project creation failed: test-acc-tf-p-4335645114554746544, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:05:14.4769393Z --- FAIL: TestAccClusterAPI_moveBasic (67.89s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 50 minutes
- 2026-06-02

### Error 2026-06-02T01:14:07+00:00
```
2026-06-02T01:14:07.1434689Z === RUN   TestAccClusterAPI_moveBasic
2026-06-02T01:14:07.1435855Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-6557295261729049556
2026-06-02T01:14:07.1436771Z     move_test.go:18: 
2026-06-02T01:14:07.1438126Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:14:07.1440025Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:14:07.1442540Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:14:07.1444600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:18
2026-06-02T01:14:07.1445410Z         	Error:      	Received unexpected error:
2026-06-02T01:14:07.1447418Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:14:07.1448499Z         	Test:       	TestAccClusterAPI_moveBasic
2026-06-02T01:14:07.1450529Z         	Messages:   	Project creation failed: test-acc-tf-p-6557295261729049556, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:14:07.1452160Z --- FAIL: TestAccClusterAPI_moveBasic (61.70s)
```

- 2026-06-03 PASS 32 minutes
- 2026-06-04 PASS 43 minutes
- 2026-06-05 PASS 18 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-17 01:31](#error-2026-05-17t0131440000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a0913263ddc9e3868e58d3d/clusters | qa | out_of_capacity | 3.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 23 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17

### Error 2026-05-17T01:31:44+00:00
```
2026-05-17T01:31:44.8470109Z === RUN   TestAccClusterAPI_moveBasic
2026-05-17T01:31:44.8470831Z     move_test.go:18: Creating execution project (1): test-acc-tf-p-4959711136507156121
2026-05-17T01:31:44.8473536Z === CONT  TestAccClusterAPI_moveBasic
2026-05-17T01:31:44.8484187Z === NAME  TestAccClusterAPI_moveBasic
2026-05-17T01:31:44.8484630Z     move_test.go:21: Step 1/2 error: Error running apply: exit status 1
2026-05-17T01:31:44.8484925Z         
2026-05-17T01:31:44.8485159Z         Error: Error calling API in Create
2026-05-17T01:31:44.8485390Z         
2026-05-17T01:31:44.8485649Z           with mongodbatlas_cluster_old_api.old,
2026-05-17T01:31:44.8486158Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster_old_api" "old":
2026-05-17T01:31:44.8486640Z           12: 		resource "mongodbatlas_cluster_old_api" "old" {
2026-05-17T01:31:44.8487058Z         
2026-05-17T01:31:44.8487493Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a0913263ddc9e3868e58d3d/clusters
2026-05-17T01:31:44.8488034Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-17T01:31:44.8488546Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-17T01:31:44.8488942Z         Conflict. Params: [], BadRequestDetail: 
2026-05-17T01:31:44.8489381Z --- FAIL: TestAccClusterAPI_moveBasic (3.78s)
```

- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 20 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 19 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
