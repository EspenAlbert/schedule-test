# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.03s
[2026-07-11 00:54](#error-2026-07-11t0054050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 118.06s
[2026-07-14 03:02](#error-2026-07-14t0302180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.03s
[2026-07-18 01:15](#error-2026-07-18t0115300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-07-21 01:42](#error-2026-07-21t0142120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.05s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.2773604Z === RUN   TestAccSearchIndexAPI_basic
2026-07-09T01:36:44.2774820Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-5959445368824696712
2026-07-09T01:36:44.2776043Z     resource_test.go:22: 
2026-07-09T01:36:44.2777741Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.2781145Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.2784636Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.2788235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T01:36:44.2792009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-07-09T01:36:44.2794687Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:36:44.2796115Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.2800271Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2802419Z         	Test:       	TestAccSearchIndexAPI_basic
2026-07-09T01:36:44.2866093Z         	Messages:   	Project creation failed: test-acc-tf-p-5959445368824696712, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2867640Z --- FAIL: TestAccSearchIndexAPI_basic (81.30s)
```

- 2026-07-10 PASS 28 minutes
- 2026-07-11

### Error 2026-07-11T00:54:05+00:00
```
2026-07-11T00:54:05.7785162Z === RUN   TestAccSearchIndexAPI_basic
2026-07-11T00:54:05.7786624Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-3774827401347382214
2026-07-11T00:54:05.7787917Z     resource_test.go:22: 
2026-07-11T00:54:05.7789692Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:05.7793509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:05.7797303Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:05.7800930Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T00:54:05.7804768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-07-11T00:54:05.7807642Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:54:05.7808699Z         	Error:      	Received unexpected error:
2026-07-11T00:54:05.7812633Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.7814768Z         	Test:       	TestAccSearchIndexAPI_basic
2026-07-11T00:54:05.7818374Z         	Messages:   	Project creation failed: test-acc-tf-p-3774827401347382214, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.7820672Z --- FAIL: TestAccSearchIndexAPI_basic (118.56s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 48 minutes
- 2026-07-14

### Error 2026-07-14T03:02:18+00:00
```
2026-07-14T03:02:18.7056257Z === RUN   TestAccSearchIndexAPI_basic
2026-07-14T03:02:18.7057436Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-2648168884257931411
2026-07-14T03:02:18.7058197Z     resource_test.go:22: 
2026-07-14T03:02:18.7061523Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T03:02:18.7066091Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T03:02:18.7070262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T03:02:18.7074625Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-14T03:02:18.7076820Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-07-14T03:02:18.7078108Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-14T03:02:18.7078656Z         	Error:      	Received unexpected error:
2026-07-14T03:02:18.7080686Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T03:02:18.7081859Z         	Test:       	TestAccSearchIndexAPI_basic
2026-07-14T03:02:18.7084008Z         	Messages:   	Project creation failed: test-acc-tf-p-2648168884257931411, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T03:02:18.7085296Z --- FAIL: TestAccSearchIndexAPI_basic (84.35s)
```

- 2026-07-15 PASS 38 minutes
- 2026-07-16 PASS 45 minutes
- 2026-07-17 PASS 49 minutes
- 2026-07-18

### Error 2026-07-18T01:15:30+00:00
```
2026-07-18T01:15:30.8867103Z === RUN   TestAccSearchIndexAPI_basic
2026-07-18T01:15:30.8868157Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-2831449362599549221
2026-07-18T01:15:30.8868830Z     resource_test.go:22: 
2026-07-18T01:15:30.8869907Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:15:30.8874620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:15:30.8878310Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:15:30.8881129Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-18T01:15:30.8883154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-07-18T01:15:30.8884746Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:15:30.8885306Z         	Error:      	Received unexpected error:
2026-07-18T01:15:30.8887346Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.8888431Z         	Test:       	TestAccSearchIndexAPI_basic
2026-07-18T01:15:30.8890233Z         	Messages:   	Project creation failed: test-acc-tf-p-2831449362599549221, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.8891416Z --- FAIL: TestAccSearchIndexAPI_basic (64.08s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:42:12+00:00
```
2026-07-21T01:42:12.8141954Z === RUN   TestAccSearchIndexAPI_basic
2026-07-21T01:42:12.8142854Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-5359045581837177881
2026-07-21T01:42:12.8143641Z     resource_test.go:22: 
2026-07-21T01:42:12.8144903Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:42:12.8148201Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:42:12.8150958Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:42:12.8153707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T01:42:12.8155766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-07-21T01:42:12.8157097Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:42:12.8158058Z         	Error:      	Received unexpected error:
2026-07-21T01:42:12.8160188Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8161275Z         	Test:       	TestAccSearchIndexAPI_basic
2026-07-21T01:42:12.8163154Z         	Messages:   	Project creation failed: test-acc-tf-p-5359045581837177881, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8164373Z --- FAIL: TestAccSearchIndexAPI_basic (85.45s)
```

- 2026-07-22 PASS 34 minutes
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8444669Z === RUN   TestAccSearchIndexAPI_basic
2026-07-23T02:04:19.8445246Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-8108752541859916443
2026-07-23T02:04:19.8445744Z     resource_test.go:22: 
2026-07-23T02:04:19.8446669Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T02:04:19.8448491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T02:04:19.8450461Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T02:04:19.8452268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T02:04:19.8454469Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:22
2026-07-23T02:04:19.8456077Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T02:04:19.8456621Z         	Error:      	Received unexpected error:
2026-07-23T02:04:19.8458623Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8459622Z         	Test:       	TestAccSearchIndexAPI_basic
2026-07-23T02:04:19.8461560Z         	Messages:   	Project creation failed: test-acc-tf-p-8108752541859916443, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T02:04:19.8462737Z --- FAIL: TestAccSearchIndexAPI_basic (64.01s)
```

- 2026-07-24 PASS 48 minutes
- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS 43 minutes
- 2026-07-29 PASS 59 minutes
- 2026-07-30 PASS 53 minutes
- 2026-07-31 PASS 39 minutes
- 2026-08-01 PASS 35 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 44 minutes
- 2026-08-04 PASS 39 minutes
- 2026-08-05 PASS an hour
- 2026-08-06 PASS an hour
- 2026-08-07 PASS 57 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 47 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 33 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 53 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 57 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 41 minutes
  - PASS 57 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 33 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
