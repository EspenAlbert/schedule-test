# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 8)
Success rate: 77.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 02:51](#error-2026-05-07t0251440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.07s
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.10s
[2026-05-16 01:46](#error-2026-05-16t0146080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.08s
[2026-05-19 02:05](#error-2026-05-19t0205390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-05-26 03:14](#error-2026-05-26t0314060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.07s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.07s
[2026-05-30 02:30](#error-2026-05-30t0230490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL a minute

### Error 2026-05-07T02:51:44+00:00
```
2026-05-07T02:51:44.8568530Z === RUN   TestAccStreamProcessor_basic
2026-05-07T02:51:44.8569114Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-8654202314454915152
2026-05-07T02:51:44.8569757Z     resource_test.go:53: 
2026-05-07T02:51:44.8570784Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-07T02:51:44.8573029Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-07T02:51:44.8575098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-07T02:51:44.8577214Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-07T02:51:44.8579571Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-05-07T02:51:44.8581884Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-05-07T02:51:44.8582892Z         	Error:      	Received unexpected error:
2026-05-07T02:51:44.8585139Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T02:51:44.8586317Z         	Test:       	TestAccStreamProcessor_basic
2026-05-07T02:51:44.8588588Z         	Messages:   	Project creation failed: test-acc-tf-p-8654202314454915152, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T02:51:44.8589971Z --- FAIL: TestAccStreamProcessor_basic (65.74s)
```

  - PASS 12 seconds
- 2026-05-08 PASS 9 seconds
- 2026-05-09
  - PASS 7 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1235322Z === RUN   TestAccStreamProcessor_basic
2026-05-09T01:47:38.1235898Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-3692064391672269439
2026-05-09T01:47:38.1236398Z     resource_test.go:53: 
2026-05-09T01:47:38.1237307Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1239106Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1240904Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1242898Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1244785Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-05-09T01:47:38.1246703Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-05-09T01:47:38.1247513Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1249447Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1250476Z         	Test:       	TestAccStreamProcessor_basic
2026-05-09T01:47:38.1252333Z         	Messages:   	Project creation failed: test-acc-tf-p-3692064391672269439, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1253651Z --- FAIL: TestAccStreamProcessor_basic (62.98s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 57 seconds
- 2026-05-13 PASS 10 seconds
- 2026-05-14 PASS 32 seconds
- 2026-05-15 PASS 7 seconds
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.0982475Z === RUN   TestAccStreamProcessor_basic
2026-05-16T01:46:08.0983148Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-3134263800547637509
2026-05-16T01:46:08.0983648Z     resource_test.go:53: 
2026-05-16T01:46:08.0984564Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.0986381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.0988200Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.0990024Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-16T01:46:08.0991931Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-05-16T01:46:08.0994107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-05-16T01:46:08.0994910Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.0996874Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.0997904Z         	Test:       	TestAccStreamProcessor_basic
2026-05-16T01:46:08.0999675Z         	Messages:   	Project creation failed: test-acc-tf-p-3134263800547637509, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.1000990Z --- FAIL: TestAccStreamProcessor_basic (81.83s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 7 seconds
- 2026-05-19

### Error 2026-05-19T02:05:39+00:00
```
2026-05-19T02:05:39.1646862Z === RUN   TestAccStreamProcessor_basic
2026-05-19T02:05:39.1647789Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-4726313640359550466
2026-05-19T02:05:39.1648603Z     resource_test.go:53: 
2026-05-19T02:05:39.1650108Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T02:05:39.1653165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T02:05:39.1656414Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T02:05:39.1659655Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-19T02:05:39.1662911Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-05-19T02:05:39.1666416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-05-19T02:05:39.1667843Z         	Error:      	Received unexpected error:
2026-05-19T02:05:39.1671174Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1672915Z         	Test:       	TestAccStreamProcessor_basic
2026-05-19T02:05:39.1676035Z         	Messages:   	Project creation failed: test-acc-tf-p-4726313640359550466, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1678091Z --- FAIL: TestAccStreamProcessor_basic (65.30s)
```

- 2026-05-20
  - PASS 10 seconds
  - PASS 8 seconds
- 2026-05-21 PASS 29 seconds
- 2026-05-22 PASS 8 seconds
- 2026-05-23 PASS 50 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26

### Error 2026-05-26T03:14:06+00:00
```
2026-05-26T03:14:06.8770953Z === RUN   TestAccStreamProcessor_basic
2026-05-26T03:14:06.8771671Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-2099546962562269111
2026-05-26T03:14:06.8772203Z     resource_test.go:53: 
2026-05-26T03:14:06.8773136Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:14:06.8774966Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:14:06.8776801Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:14:06.8778889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-26T03:14:06.8780822Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-05-26T03:14:06.8782766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-05-26T03:14:06.8783584Z         	Error:      	Received unexpected error:
2026-05-26T03:14:06.8785547Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8786594Z         	Test:       	TestAccStreamProcessor_basic
2026-05-26T03:14:06.8788519Z         	Messages:   	Project creation failed: test-acc-tf-p-2099546962562269111, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8789732Z --- FAIL: TestAccStreamProcessor_basic (65.67s)
```

- 2026-05-27 PASS 10 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5264202Z === RUN   TestAccStreamProcessor_basic
2026-05-28T02:40:17.5264772Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-4554427494144402245
2026-05-28T02:40:17.5265282Z     resource_test.go:53: 
2026-05-28T02:40:17.5266191Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5268271Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5270508Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5272401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5274313Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-05-28T02:40:17.5276244Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-05-28T02:40:17.5277052Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5279258Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5280291Z         	Test:       	TestAccStreamProcessor_basic
2026-05-28T02:40:17.5282178Z         	Messages:   	Project creation failed: test-acc-tf-p-4554427494144402245, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5283356Z --- FAIL: TestAccStreamProcessor_basic (73.70s)
```

- 2026-05-29 PASS 10 seconds
- 2026-05-30

### Error 2026-05-30T02:30:49+00:00
```
2026-05-30T02:30:49.6735798Z === RUN   TestAccStreamProcessor_basic
2026-05-30T02:30:49.6736533Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-7882519705971638647
2026-05-30T02:30:49.6737183Z     resource_test.go:53: 
2026-05-30T02:30:49.6738272Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T02:30:49.6740497Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T02:30:49.6742783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T02:30:49.6745024Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-30T02:30:49.6747326Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-05-30T02:30:49.6749660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-05-30T02:30:49.6750627Z         	Error:      	Received unexpected error:
2026-05-30T02:30:49.6753116Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6754187Z         	Test:       	TestAccStreamProcessor_basic
2026-05-30T02:30:49.6756235Z         	Messages:   	Project creation failed: test-acc-tf-p-7882519705971638647, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6757543Z --- FAIL: TestAccStreamProcessor_basic (62.93s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 8 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5618638Z === RUN   TestAccStreamProcessor_basic
2026-06-02T01:54:34.5619202Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-7428375380886104430
2026-06-02T01:54:34.5619689Z     resource_test.go:53: 
2026-06-02T01:54:34.5620566Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5622249Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5624109Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5625963Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-06-02T01:54:34.5627730Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-06-02T01:54:34.5629649Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-06-02T01:54:34.5630439Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5632207Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5633188Z         	Test:       	TestAccStreamProcessor_basic
2026-06-02T01:54:34.5634974Z         	Messages:   	Project creation failed: test-acc-tf-p-7428375380886104430, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5636101Z --- FAIL: TestAccStreamProcessor_basic (66.70s)
```

- 2026-06-03 PASS 8 seconds
- 2026-06-04 PASS 40 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 8 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 9 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 8 seconds
- 2026-05-25 PASS 11 seconds
- 2026-05-26 PASS 10 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
