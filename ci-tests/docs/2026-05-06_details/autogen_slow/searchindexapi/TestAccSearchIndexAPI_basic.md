# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 25) FAIL(x 9)
Success rate: 73.53%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:31](#error-2026-04-09t0131160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.09s
[2026-04-16 00:52](#error-2026-04-16t0052020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters | dev | out_of_capacity | 53.08s
[2026-04-18 01:31](#error-2026-04-18t0131350000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.05s
[2026-04-23 01:35](#error-2026-04-23t0135380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.02s
[2026-04-25 01:36](#error-2026-04-25t0136130000) |  | dev |  | 1104.06s
[2026-04-27 01:46](#error-2026-04-27t0146060000) |  | dev |  | 1077.00s
[2026-04-28 01:56](#error-2026-04-28t0156500000) |  | dev | unknown | 1200.08s
[2026-04-29 01:53](#error-2026-04-29t0153260000) |  | dev | timeout | 1635.09s
[2026-04-30 01:50](#error-2026-04-30t0150260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 29 minutes
- 2026-04-08 PASS 25 minutes
- 2026-04-09

### Error 2026-04-09T01:31:16+00:00
```
2026-04-09T01:31:16.5510245Z === RUN   TestAccSearchIndexAPI_basic
2026-04-09T01:31:16.5511361Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-4369253609921889078
2026-04-09T01:31:16.5512215Z     resource_test.go:22: 
2026-04-09T01:31:16.5514975Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:31:16.5517133Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:31:16.5519260Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:31:16.5521256Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-09T01:31:16.5523238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-04-09T01:31:16.5524471Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T01:31:16.5524977Z         	Error:      	Received unexpected error:
2026-04-09T01:31:16.5527179Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:31:16.5528216Z         	Test:       	TestAccSearchIndexAPI_basic
2026-04-09T01:31:16.5530208Z         	Messages:   	Project creation failed: test-acc-tf-p-4369253609921889078, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:31:16.5531385Z --- FAIL: TestAccSearchIndexAPI_basic (81.90s)
```

- 2026-04-10 PASS 22 minutes
- 2026-04-11 PASS 21 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 29 minutes
- 2026-04-14 PASS 19 minutes
- 2026-04-15 PASS 22 minutes
- 2026-04-16

### Error 2026-04-16T00:52:02+00:00
```
2026-04-16T00:52:02.3938725Z === RUN   TestAccSearchIndexAPI_basic
2026-04-16T00:52:02.3939149Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-4622276315003275686
2026-04-16T00:52:02.3939648Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-4227645346560078658
2026-04-16T00:52:02.3939998Z     resource_test.go:22: 
2026-04-16T00:52:02.3940684Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:52:02.3942032Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:52:02.3943432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-04-16T00:52:02.3944371Z         	Error:      	Received unexpected error:
2026-04-16T00:52:02.3946280Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.3947230Z         	Test:       	TestAccSearchIndexAPI_basic
2026-04-16T00:52:02.3948811Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4227645346560078658, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326b1ec945fedc72100e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:02.3949834Z --- FAIL: TestAccSearchIndexAPI_basic (53.80s)
```

- 2026-04-17 PASS 30 minutes
- 2026-04-18

### Error 2026-04-18T01:31:35+00:00
```
2026-04-18T01:31:35.5568836Z === RUN   TestAccSearchIndexAPI_basic
2026-04-18T01:31:35.5569758Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-228369040807957599
2026-04-18T01:31:35.5570437Z     resource_test.go:22: 
2026-04-18T01:31:35.5571685Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T01:31:35.5576874Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T01:31:35.5580342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T01:31:35.5582386Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-18T01:31:35.5584850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-04-18T01:31:35.5586180Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-18T01:31:35.5586743Z         	Error:      	Received unexpected error:
2026-04-18T01:31:35.5588845Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:31:35.5589983Z         	Test:       	TestAccSearchIndexAPI_basic
2026-04-18T01:31:35.5591716Z         	Messages:   	Project creation failed: test-acc-tf-p-228369040807957599, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:31:35.5593136Z --- FAIL: TestAccSearchIndexAPI_basic (70.53s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 19 minutes
- 2026-04-21 PASS 20 minutes
- 2026-04-22 PASS 49 minutes
- 2026-04-23

### Error 2026-04-23T01:35:38+00:00
```
2026-04-23T01:35:38.3941546Z === RUN   TestAccSearchIndexAPI_basic
2026-04-23T01:35:38.3942686Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-4578885482780318315
2026-04-23T01:35:38.3945452Z     resource_test.go:22: 
2026-04-23T01:35:38.3947007Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-23T01:35:38.3950076Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-23T01:35:38.3954243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-23T01:35:38.3957493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-23T01:35:38.3960916Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-04-23T01:35:38.3962948Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-23T01:35:38.3963786Z         	Error:      	Received unexpected error:
2026-04-23T01:35:38.3967092Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T01:35:38.3968757Z         	Test:       	TestAccSearchIndexAPI_basic
2026-04-23T01:35:38.3971962Z         	Messages:   	Project creation failed: test-acc-tf-p-4578885482780318315, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T01:35:38.3973868Z --- FAIL: TestAccSearchIndexAPI_basic (73.16s)
```

- 2026-04-24 PASS 20 minutes
- 2026-04-25

### Error 2026-04-25T01:36:13+00:00
```
2026-04-25T01:36:13.5521248Z === RUN   TestAccSearchIndexAPI_basic
2026-04-25T01:36:13.5522003Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-3092238157550315951
2026-04-25T01:36:13.5522854Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-1675510221340582844
2026-04-25T01:36:13.5523487Z 2026/04/25 00:47:15 [DEBUG] Waiting for state to become: [IDLE]
2026-04-25T01:36:13.5523977Z 2026/04/25 00:50:16 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5524442Z 2026/04/25 00:51:16 [TRACE] Waiting 10s before next try
2026-04-25T01:36:13.5524889Z 2026/04/25 00:51:26 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5525326Z 2026/04/25 00:52:26 [TRACE] Waiting 10s before next try
2026-04-25T01:36:13.5525756Z 2026/04/25 00:52:36 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5526187Z 2026/04/25 00:53:37 [TRACE] Waiting 10s before next try
2026-04-25T01:36:13.5526624Z 2026/04/25 00:53:47 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5527066Z 2026/04/25 00:54:47 [TRACE] Waiting 10s before next try
2026-04-25T01:36:13.5527589Z 2026/04/25 00:54:57 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5528003Z 2026/04/25 00:55:58 [TRACE] Waiting 10s before next try
2026-04-25T01:36:13.5528752Z 2026/04/25 00:56:08 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5529181Z 2026/04/25 00:57:08 [TRACE] Waiting 10s before next try
2026-04-25T01:36:13.5529588Z 2026/04/25 00:57:18 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5529996Z 2026/04/25 00:58:19 [TRACE] Waiting 10s before next try
2026-04-25T01:36:13.5530449Z 2026/04/25 00:58:29 [DEBUG] Waiting for state to become: [COMPLETED]
2026-04-25T01:36:13.5530909Z 2026/04/25 00:59:29 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5531321Z 2026/04/25 01:00:29 [TRACE] Waiting 10s before next try
2026-04-25T01:36:13.5531727Z 2026/04/25 01:00:40 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5532127Z 2026/04/25 01:01:40 [TRACE] Waiting 10s before next try
2026-04-25T01:36:13.5532540Z 2026/04/25 01:01:50 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5532940Z 2026/04/25 01:02:50 [TRACE] Waiting 10s before next try
2026-04-25T01:36:13.5533308Z 2026/04/25 01:03:00 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5533651Z 2026/04/25 01:04:01 [TRACE] Waiting 10s before next try
2026-04-25T01:36:13.5534271Z 2026/04/25 01:04:11 [TRACE] Waiting 1m0s before next try
2026-04-25T01:36:13.5534629Z     resource_test.go:22: 
2026-04-25T01:36:13.5535605Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-04-25T01:36:13.5540630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-04-25T01:36:13.5542162Z         	Error:      	Received unexpected error:
2026-04-25T01:36:13.5543810Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-25T01:36:13.5544404Z         	Test:       	TestAccSearchIndexAPI_basic
2026-04-25T01:36:13.5544778Z --- FAIL: TestAccSearchIndexAPI_basic (1104.64s)
```

- 2026-04-26: MISSING
- 2026-04-27

### Error 2026-04-27T01:46:06+00:00
```
2026-04-27T01:46:06.8290862Z === RUN   TestAccSearchIndexAPI_basic
2026-04-27T01:46:06.8291482Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-1240717298391572408
2026-04-27T01:46:06.8292164Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-6380147241718966741
2026-04-27T01:46:06.8292684Z 2026/04/27 00:51:40 [DEBUG] Waiting for state to become: [IDLE]
2026-04-27T01:46:06.8293099Z 2026/04/27 00:54:40 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8293463Z 2026/04/27 00:55:40 [TRACE] Waiting 10s before next try
2026-04-27T01:46:06.8294009Z 2026/04/27 00:55:51 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8294366Z 2026/04/27 00:56:51 [TRACE] Waiting 10s before next try
2026-04-27T01:46:06.8294720Z 2026/04/27 00:57:01 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8295076Z 2026/04/27 00:58:01 [TRACE] Waiting 10s before next try
2026-04-27T01:46:06.8295417Z 2026/04/27 00:58:12 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8295759Z 2026/04/27 00:59:12 [TRACE] Waiting 10s before next try
2026-04-27T01:46:06.8296093Z 2026/04/27 00:59:22 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8296430Z 2026/04/27 01:00:22 [TRACE] Waiting 10s before next try
2026-04-27T01:46:06.8296768Z 2026/04/27 01:00:32 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8297317Z 2026/04/27 01:01:32 [TRACE] Waiting 10s before next try
2026-04-27T01:46:06.8297672Z 2026/04/27 01:01:43 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8298063Z 2026/04/27 01:02:43 [DEBUG] Waiting for state to become: [COMPLETED]
2026-04-27T01:46:06.8298468Z 2026/04/27 01:03:43 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8298810Z 2026/04/27 01:04:43 [TRACE] Waiting 10s before next try
2026-04-27T01:46:06.8299148Z 2026/04/27 01:04:53 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8299483Z 2026/04/27 01:05:53 [TRACE] Waiting 10s before next try
2026-04-27T01:46:06.8299817Z 2026/04/27 01:06:04 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8300149Z 2026/04/27 01:07:04 [TRACE] Waiting 10s before next try
2026-04-27T01:46:06.8300486Z 2026/04/27 01:07:14 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8300818Z 2026/04/27 01:08:14 [TRACE] Waiting 10s before next try
2026-04-27T01:46:06.8301156Z 2026/04/27 01:08:24 [TRACE] Waiting 1m0s before next try
2026-04-27T01:46:06.8301511Z 2026/04/27 01:09:24 [TRACE] Waiting 10s before next try
2026-04-27T01:46:06.8301883Z     resource_test.go:22: 
2026-04-27T01:46:06.8303082Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-04-27T01:46:06.8305012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-04-27T01:46:06.8305819Z         	Error:      	Received unexpected error:
2026-04-27T01:46:06.8306664Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-27T01:46:06.8307407Z         	Test:       	TestAccSearchIndexAPI_basic
2026-04-27T01:46:06.8307782Z --- FAIL: TestAccSearchIndexAPI_basic (1077.04s)
```

- 2026-04-28

### Error 2026-04-28T01:56:50+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-04-28T01:56:50.870000+00:00-TestAccSearchIndexAPI_basic',confidence=1.0,ts_when='8 days ago')

```
2026-04-28T01:56:50.8706876Z === RUN   TestAccSearchIndexAPI_basic
2026-04-28T01:56:50.8707887Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-7006510065983054624
2026-04-28T01:56:50.8709107Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-4409725585511795801
2026-04-28T01:56:50.8709993Z 2026/04/28 00:55:16 [DEBUG] Waiting for state to become: [IDLE]
2026-04-28T01:56:50.8710674Z 2026/04/28 00:58:17 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8711332Z 2026/04/28 00:59:17 [TRACE] Waiting 10s before next try
2026-04-28T01:56:50.8712217Z 2026/04/28 00:59:27 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8713123Z 2026/04/28 01:00:28 [TRACE] Waiting 10s before next try
2026-04-28T01:56:50.8713766Z 2026/04/28 01:00:38 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8714392Z 2026/04/28 01:01:38 [TRACE] Waiting 10s before next try
2026-04-28T01:56:50.8715025Z 2026/04/28 01:01:49 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8715635Z 2026/04/28 01:02:49 [TRACE] Waiting 10s before next try
2026-04-28T01:56:50.8716248Z 2026/04/28 01:02:59 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8716863Z 2026/04/28 01:04:00 [TRACE] Waiting 10s before next try
2026-04-28T01:56:50.8717479Z 2026/04/28 01:04:10 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8718079Z 2026/04/28 01:05:11 [TRACE] Waiting 10s before next try
2026-04-28T01:56:50.8718701Z 2026/04/28 01:05:21 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8719399Z 2026/04/28 01:06:22 [DEBUG] Waiting for state to become: [COMPLETED]
2026-04-28T01:56:50.8720121Z 2026/04/28 01:07:22 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8720759Z 2026/04/28 01:08:22 [TRACE] Waiting 10s before next try
2026-04-28T01:56:50.8721369Z 2026/04/28 01:08:33 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8721992Z 2026/04/28 01:09:33 [TRACE] Waiting 10s before next try
2026-04-28T01:56:50.8722850Z 2026/04/28 01:09:43 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8723477Z 2026/04/28 01:10:44 [TRACE] Waiting 10s before next try
2026-04-28T01:56:50.8724070Z 2026/04/28 01:10:54 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8724679Z 2026/04/28 01:11:54 [TRACE] Waiting 10s before next try
2026-04-28T01:56:50.8725303Z 2026/04/28 01:12:04 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8725917Z 2026/04/28 01:13:05 [TRACE] Waiting 10s before next try
2026-04-28T01:56:50.8726540Z 2026/04/28 01:13:15 [TRACE] Waiting 1m0s before next try
2026-04-28T01:56:50.8727163Z     resource_test.go:22: 
2026-04-28T01:56:50.8730763Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-04-28T01:56:50.8734699Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-04-28T01:56:50.8736170Z         	Error:      	Received unexpected error:
2026-04-28T01:56:50.8737790Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-28T01:56:50.8738782Z         	Test:       	TestAccSearchIndexAPI_basic
2026-04-28T01:56:50.8739390Z --- FAIL: TestAccSearchIndexAPI_basic (1200.80s)
```

- 2026-04-29

### Error 2026-04-29T01:53:26+00:00
```
2026-04-29T01:53:26.8883762Z === RUN   TestAccSearchIndexAPI_basic
2026-04-29T01:53:26.8884722Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-7506084624375691746
2026-04-29T01:53:26.8885869Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-7157062159376751819
2026-04-29T01:53:26.8886684Z 2026/04/29 00:55:36 [DEBUG] Waiting for state to become: [IDLE]
2026-04-29T01:53:26.8887335Z 2026/04/29 00:58:36 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8887932Z 2026/04/29 00:59:37 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8888731Z 2026/04/29 00:59:47 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8889330Z 2026/04/29 01:00:47 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8890086Z 2026/04/29 01:00:57 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8890669Z 2026/04/29 01:01:57 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8891233Z 2026/04/29 01:02:07 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8891794Z 2026/04/29 01:03:08 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8892380Z 2026/04/29 01:03:18 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8892954Z 2026/04/29 01:04:18 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8893519Z 2026/04/29 01:04:28 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8894084Z 2026/04/29 01:05:29 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8894643Z 2026/04/29 01:05:39 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8895207Z 2026/04/29 01:06:39 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8895779Z 2026/04/29 01:06:49 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8896429Z 2026/04/29 01:07:50 [DEBUG] Waiting for state to become: [COMPLETED]
2026-04-29T01:53:26.8897076Z 2026/04/29 01:08:50 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8897641Z 2026/04/29 01:09:50 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8898213Z 2026/04/29 01:10:00 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8898777Z 2026/04/29 01:11:00 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8899337Z 2026/04/29 01:11:10 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8900064Z 2026/04/29 01:12:11 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8900626Z 2026/04/29 01:12:21 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8901198Z 2026/04/29 01:13:21 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8901752Z 2026/04/29 01:13:31 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8902356Z 2026/04/29 01:14:31 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8902922Z 2026/04/29 01:14:41 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8903647Z 2026/04/29 01:15:41 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8904216Z 2026/04/29 01:15:52 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8904768Z 2026/04/29 01:16:52 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8905353Z 2026/04/29 01:17:02 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8905928Z 2026/04/29 01:18:02 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8906494Z 2026/04/29 01:18:12 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8907058Z 2026/04/29 01:19:12 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8907620Z 2026/04/29 01:19:22 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8908216Z 2026/04/29 01:20:22 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8908794Z 2026/04/29 01:20:33 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8909345Z 2026/04/29 01:21:33 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8910054Z 2026/04/29 01:21:43 [TRACE] Waiting 1m0s before next try
2026-04-29T01:53:26.8910814Z 2026/04/29 01:22:43 [TRACE] Waiting 10s before next try
2026-04-29T01:53:26.8911411Z 2026/04/29 01:22:50 [WARN] WaitForState timeout after 15m0s
2026-04-29T01:53:26.8912107Z 2026/04/29 01:22:50 [WARN] WaitForState starting 30s refresh grace period
2026-04-29T01:53:26.8912774Z     resource_test.go:22: 
2026-04-29T01:53:26.8914578Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-04-29T01:53:26.8917906Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-04-29T01:53:26.8919231Z         	Error:      	Received unexpected error:
2026-04-29T01:53:26.8921040Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-04-29T01:53:26.8922239Z         	Test:       	TestAccSearchIndexAPI_basic
2026-04-29T01:53:26.8922839Z --- FAIL: TestAccSearchIndexAPI_basic (1635.89s)
```

- 2026-04-30

### Error 2026-04-30T01:50:26+00:00
```
2026-04-30T01:50:26.4984173Z === RUN   TestAccSearchIndexAPI_basic
2026-04-30T01:50:26.4987879Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-3227813862813415395
2026-04-30T01:50:26.4988489Z     resource_test.go:22: 
2026-04-30T01:50:26.4989614Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:50:26.4992039Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:50:26.4994302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:50:26.4996769Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-30T01:50:26.4998893Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-04-30T01:50:26.5000106Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:50:26.5000616Z         	Error:      	Received unexpected error:
2026-04-30T01:50:26.5002527Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:50:26.5003530Z         	Test:       	TestAccSearchIndexAPI_basic
2026-04-30T01:50:26.5005260Z         	Messages:   	Project creation failed: test-acc-tf-p-3227813862813415395, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:50:26.5006887Z --- FAIL: TestAccSearchIndexAPI_basic (76.27s)
```

- 2026-05-01 PASS 20 minutes
- 2026-05-02 PASS 24 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 23 minutes
- 2026-05-05 PASS 29 minutes
- 2026-05-06 PASS 20 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 17 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 28 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 27 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 21 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 31 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 38 minutes
- 2026-05-04 PASS 35 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 31 minutes
