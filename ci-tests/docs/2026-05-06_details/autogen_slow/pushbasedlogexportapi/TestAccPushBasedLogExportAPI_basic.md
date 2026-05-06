# autogen_slow/pushbasedlogexportapi/TestAccPushBasedLogExportAPI_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 01:11](#error-2026-04-11t0111110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-04-16 00:51](#error-2026-04-16t0051530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-04-21 01:22](#error-2026-04-21t0122270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.04s
[2026-04-30 01:00](#error-2026-04-30t0100090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.06s
[2026-05-02 01:19](#error-2026-05-02t0119210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-05-05 01:39](#error-2026-05-05t0139180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 minutes
- 2026-04-08 PASS a minute
- 2026-04-09 PASS 2 minutes
- 2026-04-10 PASS a minute
- 2026-04-11

### Error 2026-04-11T01:11:11+00:00
```
2026-04-11T01:11:11.8417812Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-04-11T01:11:11.8418460Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-318284627616190984
2026-04-11T01:11:11.8418940Z     resource_test.go:21: 
2026-04-11T01:11:11.8419785Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:11:11.8421439Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:11:11.8423077Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:11:11.8424935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-04-11T01:11:11.8426948Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-04-11T01:11:11.8428064Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T01:11:11.8428551Z         	Error:      	Received unexpected error:
2026-04-11T01:11:11.8430274Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:11:11.8431224Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-04-11T01:11:11.8432806Z         	Messages:   	Project creation failed: test-acc-tf-p-318284627616190984, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:11:11.8433876Z --- FAIL: TestAccPushBasedLogExportAPI_basic (62.89s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14 PASS a minute
- 2026-04-15 PASS a minute
- 2026-04-16

### Error 2026-04-16T00:51:53+00:00
```
2026-04-16T00:51:53.9554244Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-04-16T00:51:53.9554845Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-6831675195373044252
2026-04-16T00:51:53.9556827Z     resource_test.go:21: 
2026-04-16T00:51:53.9557885Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:51:53.9559308Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:51:53.9560675Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:51:53.9562191Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-04-16T00:51:53.9563781Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-04-16T00:51:53.9564914Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-16T00:51:53.9565324Z         	Error:      	Received unexpected error:
2026-04-16T00:51:53.9566810Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:51:53.9567594Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-04-16T00:51:53.9569191Z         	Messages:   	Project creation failed: test-acc-tf-p-6831675195373044252, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:51:53.9570098Z --- FAIL: TestAccPushBasedLogExportAPI_basic (62.39s)
```

- 2026-04-17 PASS a minute
- 2026-04-18 PASS 2 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS a minute
- 2026-04-21

### Error 2026-04-21T01:22:27+00:00
```
2026-04-21T01:22:27.1671594Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-04-21T01:22:27.1672171Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5793689139882322516
2026-04-21T01:22:27.1672652Z     resource_test.go:21: 
2026-04-21T01:22:27.1673572Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-21T01:22:27.1675419Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-21T01:22:27.1677292Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-21T01:22:27.1679567Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-04-21T01:22:27.1681683Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-04-21T01:22:27.1682948Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-21T01:22:27.1683469Z         	Error:      	Received unexpected error:
2026-04-21T01:22:27.1685467Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T01:22:27.1686530Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-04-21T01:22:27.1688348Z         	Messages:   	Project creation failed: test-acc-tf-p-5793689139882322516, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-21T01:22:27.1689900Z --- FAIL: TestAccPushBasedLogExportAPI_basic (64.39s)
```

- 2026-04-22 PASS a minute
- 2026-04-23 PASS a minute
- 2026-04-24 PASS a minute
- 2026-04-25 PASS 2 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS a minute
- 2026-04-28 PASS 2 minutes
- 2026-04-29 PASS a minute
- 2026-04-30

### Error 2026-04-30T01:00:09+00:00
```
2026-04-30T01:00:09.4766458Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-04-30T01:00:09.4767032Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-952105112228892490
2026-04-30T01:00:09.4767502Z     resource_test.go:21: 
2026-04-30T01:00:09.4768402Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:00:09.4770202Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:00:09.4771992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:00:09.4773949Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-04-30T01:00:09.4775973Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-04-30T01:00:09.4777555Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:00:09.4778094Z         	Error:      	Received unexpected error:
2026-04-30T01:00:09.4780034Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:09.4781220Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-04-30T01:00:09.4782965Z         	Messages:   	Project creation failed: test-acc-tf-p-952105112228892490, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:09.4784143Z --- FAIL: TestAccPushBasedLogExportAPI_basic (81.61s)
```

- 2026-05-01 PASS a minute
- 2026-05-02

### Error 2026-05-02T01:19:21+00:00
```
2026-05-02T01:19:21.4984323Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-05-02T01:19:21.4984975Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-2015455283037640621
2026-05-02T01:19:21.4985457Z     resource_test.go:21: 
2026-05-02T01:19:21.4986363Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-02T01:19:21.4988231Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-02T01:19:21.4990031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-02T01:19:21.4992165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-05-02T01:19:21.4994257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-05-02T01:19:21.4995490Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-02T01:19:21.4996134Z         	Error:      	Received unexpected error:
2026-05-02T01:19:21.4998075Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-02T01:19:21.4999104Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-05-02T01:19:21.5001082Z         	Messages:   	Project creation failed: test-acc-tf-p-2015455283037640621, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-02T01:19:21.5002277Z --- FAIL: TestAccPushBasedLogExportAPI_basic (62.13s)
```

- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05

### Error 2026-05-05T01:39:18+00:00
```
2026-05-05T01:39:18.1473531Z === RUN   TestAccPushBasedLogExportAPI_basic
2026-05-05T01:39:18.1474118Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-1275159333312519029
2026-05-05T01:39:18.1474856Z     resource_test.go:21: 
2026-05-05T01:39:18.1475779Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T01:39:18.1477633Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T01:39:18.1479458Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T01:39:18.1481453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:28
2026-05-05T01:39:18.1483508Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/pushbasedlogexportapi/resource_test.go:21
2026-05-05T01:39:18.1485135Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-05T01:39:18.1485647Z         	Error:      	Received unexpected error:
2026-05-05T01:39:18.1487610Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:39:18.1488647Z         	Test:       	TestAccPushBasedLogExportAPI_basic
2026-05-05T01:39:18.1490428Z         	Messages:   	Project creation failed: test-acc-tf-p-1275159333312519029, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T01:39:18.1491610Z --- FAIL: TestAccPushBasedLogExportAPI_basic (62.13s)
```

- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a minute
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a minute
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a minute
- 2026-05-04 PASS a minute
- 2026-05-05: MISSING
- 2026-05-06 PASS a minute
