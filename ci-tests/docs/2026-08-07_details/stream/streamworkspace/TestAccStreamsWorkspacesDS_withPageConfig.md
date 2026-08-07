# stream/streamworkspace/TestAccStreamsWorkspacesDS_withPageConfig Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.02s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 115.07s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.00s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.03s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6554489Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-07-09T01:15:21.6555003Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-6517987833111800379
2026-07-09T01:15:21.6555445Z     plural_data_source_test.go:14: 
2026-07-09T01:15:21.6556295Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6557667Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6559026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6560509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-07-09T01:15:21.6561175Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6562698Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6563669Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-07-09T01:15:21.6565057Z         	Messages:   	Project creation failed: test-acc-tf-p-6517987833111800379, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6566093Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (65.15s)
```

- 2026-07-10 PASS a second
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7941269Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-07-11T01:30:51.7941953Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-7778724938777219410
2026-07-11T01:30:51.7942528Z     plural_data_source_test.go:14: 
2026-07-11T01:30:51.7943502Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7945338Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7947171Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7949320Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-07-11T01:30:51.7950196Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7952166Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7953268Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-07-11T01:30:51.7955116Z         	Messages:   	Project creation failed: test-acc-tf-p-7778724938777219410, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7956374Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (115.69s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a second
- 2026-07-14 PASS 2 seconds
- 2026-07-15 PASS 2 seconds
- 2026-07-16 PASS 35 seconds
- 2026-07-17 PASS 2 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0831247Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-07-18T01:45:13.0832359Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-3523041907779600178
2026-07-18T01:45:13.0833312Z     plural_data_source_test.go:14: 
2026-07-18T01:45:13.0835184Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0838613Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0842043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0846157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-07-18T01:45:13.0847733Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0851399Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0853407Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-07-18T01:45:13.0856982Z         	Messages:   	Project creation failed: test-acc-tf-p-3523041907779600178, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0859201Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (65.02s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3998705Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-07-21T00:59:13.3999377Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-9192242419821585246
2026-07-21T00:59:13.3999948Z     plural_data_source_test.go:14: 
2026-07-21T00:59:13.4000912Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.4002919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.4004792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.4006971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-07-21T00:59:13.4007888Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.4010039Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.4011162Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-07-21T00:59:13.4013164Z         	Messages:   	Project creation failed: test-acc-tf-p-9192242419821585246, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.4014443Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (77.27s)
```

- 2026-07-22 PASS a second
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6491844Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-07-23T03:35:04.6492534Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-61616440834175600
2026-07-23T03:35:04.6493105Z     plural_data_source_test.go:14: 
2026-07-23T03:35:04.6494076Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6495870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6497946Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6499935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-07-23T03:35:04.6500806Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6502774Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.6503839Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-07-23T03:35:04.6505597Z         	Messages:   	Project creation failed: test-acc-tf-p-61616440834175600, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.6506960Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (61.77s)
```

- 2026-07-24 PASS a second
- 2026-07-25 PASS a second
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 seconds
- 2026-07-28 PASS a second
- 2026-07-29 PASS a second
- 2026-07-30 PASS a second
- 2026-07-31 PASS a second
- 2026-08-01 PASS a second
- 2026-08-02: MISSING
- 2026-08-03
  - PASS a second
  - PASS a second
  - PASS a second
- 2026-08-04 PASS a second
- 2026-08-05 PASS 2 seconds
- 2026-08-06 PASS 2 seconds
- 2026-08-07 PASS 2 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a second
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a second
  - PASS a second
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a second
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
