# autogen_fast/databaseuserapi/TestAccDatabaseUserAPI_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 8)
Success rate: 73.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.04s
[2026-05-19 01:08](#error-2026-05-19t0108180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.07s
[2026-05-21 01:09](#error-2026-05-21t0109190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s
[2026-05-23 01:05](#error-2026-05-23t0105260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.02s
[2026-05-26 02:14](#error-2026-05-26t0214390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.07s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.05s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 12 seconds
- 2026-05-08 PASS 14 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2740914Z === RUN   TestAccDatabaseUserAPI_basic
2026-05-09T01:07:49.2741504Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-6310490918749561865
2026-05-09T01:07:49.2742030Z     resource_test.go:17: 
2026-05-09T01:07:49.2742989Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2744892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2746937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2749224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-05-09T01:07:49.2750225Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2752276Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2753346Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-05-09T01:07:49.2755191Z         	Messages:   	Project creation failed: test-acc-tf-p-6310490918749561865, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2756422Z --- FAIL: TestAccDatabaseUserAPI_basic (96.41s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 11 seconds
- 2026-05-12 PASS 18 seconds
- 2026-05-13 PASS 11 seconds
- 2026-05-14 PASS 13 seconds
- 2026-05-15 PASS 12 seconds
- 2026-05-16 PASS 28 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 11 seconds
- 2026-05-19

### Error 2026-05-19T01:08:18+00:00
```
2026-05-19T01:08:18.4402846Z === RUN   TestAccDatabaseUserAPI_basic
2026-05-19T01:08:18.4403440Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-613097923884200919
2026-05-19T01:08:18.4404095Z     resource_test.go:17: 
2026-05-19T01:08:18.4405049Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:18.4406919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:18.4408785Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:18.4410770Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-05-19T01:08:18.4411745Z         	Error:      	Received unexpected error:
2026-05-19T01:08:18.4413868Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4415102Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-05-19T01:08:18.4416922Z         	Messages:   	Project creation failed: test-acc-tf-p-613097923884200919, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4418143Z --- FAIL: TestAccDatabaseUserAPI_basic (95.70s)
```

- 2026-05-20 PASS 10 seconds
- 2026-05-21

### Error 2026-05-21T01:09:19+00:00
```
2026-05-21T01:09:19.7967517Z === RUN   TestAccDatabaseUserAPI_basic
2026-05-21T01:09:19.7968942Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-6741529321711687905
2026-05-21T01:09:19.7970196Z     resource_test.go:17: 
2026-05-21T01:09:19.7972549Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:19.7977065Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:19.7981462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:19.7985160Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-05-21T01:09:19.7986757Z         	Error:      	Received unexpected error:
2026-05-21T01:09:19.7990862Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7992844Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-05-21T01:09:19.7996160Z         	Messages:   	Project creation failed: test-acc-tf-p-6741529321711687905, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7998553Z --- FAIL: TestAccDatabaseUserAPI_basic (67.35s)
```

- 2026-05-22 PASS 12 seconds
- 2026-05-23

### Error 2026-05-23T01:05:26+00:00
```
2026-05-23T01:05:26.5125845Z === RUN   TestAccDatabaseUserAPI_basic
2026-05-23T01:05:26.5126645Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-3806088617529845342
2026-05-23T01:05:26.5127184Z     resource_test.go:17: 
2026-05-23T01:05:26.5128334Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:26.5130538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:26.5133001Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:26.5135485Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-05-23T01:05:26.5136539Z         	Error:      	Received unexpected error:
2026-05-23T01:05:26.5139031Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:26.5140837Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-05-23T01:05:26.5143267Z         	Messages:   	Project creation failed: test-acc-tf-p-3806088617529845342, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:26.5144677Z --- FAIL: TestAccDatabaseUserAPI_basic (91.16s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 13 seconds
- 2026-05-26

### Error 2026-05-26T02:14:39+00:00
```
2026-05-26T02:14:39.4151636Z === RUN   TestAccDatabaseUserAPI_basic
2026-05-26T02:14:39.4152990Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-6058851301400586882
2026-05-26T02:14:39.4154395Z     resource_test.go:17: 
2026-05-26T02:14:39.4156058Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:39.4159189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:39.4162274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:39.4166030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-05-26T02:14:39.4167966Z         	Error:      	Received unexpected error:
2026-05-26T02:14:39.4171173Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:39.4173427Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-05-26T02:14:39.4176896Z         	Messages:   	Project creation failed: test-acc-tf-p-6058851301400586882, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:39.4178285Z --- FAIL: TestAccDatabaseUserAPI_basic (61.64s)
```

- 2026-05-27 PASS 13 seconds
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6912715Z === RUN   TestAccDatabaseUserAPI_basic
2026-05-28T01:01:18.6913271Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-2888664399956722952
2026-05-28T01:01:18.6913774Z     resource_test.go:17: 
2026-05-28T01:01:18.6914625Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6916274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6917907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6919630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-05-28T01:01:18.6920476Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6922231Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6923191Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-05-28T01:01:18.6924779Z         	Messages:   	Project creation failed: test-acc-tf-p-2888664399956722952, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6925886Z --- FAIL: TestAccDatabaseUserAPI_basic (64.66s)
```

- 2026-05-29 PASS 13 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4150515Z === RUN   TestAccDatabaseUserAPI_basic
2026-05-30T01:10:40.4151149Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-5452568268655118379
2026-05-30T01:10:40.4151701Z     resource_test.go:17: 
2026-05-30T01:10:40.4152802Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.4155006Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.4156882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.4158842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-05-30T01:10:40.4159719Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.4161757Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4162823Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-05-30T01:10:40.4164732Z         	Messages:   	Project creation failed: test-acc-tf-p-5452568268655118379, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4165930Z --- FAIL: TestAccDatabaseUserAPI_basic (69.54s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 12 seconds
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0416838Z === RUN   TestAccDatabaseUserAPI_basic
2026-06-02T01:15:50.0417486Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-3722455137816217956
2026-06-02T01:15:50.0418059Z     resource_test.go:17: 
2026-06-02T01:15:50.0419042Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:50.0420872Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:15:50.0422733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:15:50.0424879Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/databaseuserapi/resource_test.go:17
2026-06-02T01:15:50.0425778Z         	Error:      	Received unexpected error:
2026-06-02T01:15:50.0427777Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0428856Z         	Test:       	TestAccDatabaseUserAPI_basic
2026-06-02T01:15:50.0430635Z         	Messages:   	Project creation failed: test-acc-tf-p-3722455137816217956, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0431839Z --- FAIL: TestAccDatabaseUserAPI_basic (66.04s)
```

- 2026-06-03 PASS 11 seconds
- 2026-06-04 PASS 13 seconds
- 2026-06-05 PASS 14 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 11 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 14 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 11 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 13 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
