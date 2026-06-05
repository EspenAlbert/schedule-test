# stream/streamworkspace/TestAccStreamsWorkspacesDS_withPageConfig Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 8)
Success rate: 77.14%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-05-16 01:46](#error-2026-05-16t0146080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.03s
[2026-05-19 02:05](#error-2026-05-19t0205390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.07s
[2026-05-21 01:56](#error-2026-05-21t0156320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-05-23 02:16](#error-2026-05-23t0216580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.00s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.02s
[2026-05-30 02:30](#error-2026-05-30t0230490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.09s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 3 seconds
  - PASS 2 seconds
- 2026-05-08 PASS 2 seconds
- 2026-05-09
  - PASS a second
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1615967Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-05-09T01:47:38.1616615Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-8203819725990305837
2026-05-09T01:47:38.1617165Z     plural_data_source_test.go:14: 
2026-05-09T01:47:38.1618106Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1619916Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1622354Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1624747Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-05-09T01:47:38.1625795Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1628132Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1629614Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-05-09T01:47:38.1631586Z         	Messages:   	Project creation failed: test-acc-tf-p-8203819725990305837, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1633212Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (63.90s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS a second
- 2026-05-12 PASS 2 seconds
- 2026-05-13 PASS 2 seconds
- 2026-05-14 PASS 2 seconds
- 2026-05-15 PASS a second
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.1210543Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-05-16T01:46:08.1211190Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-7694956537915279983
2026-05-16T01:46:08.1211733Z     plural_data_source_test.go:14: 
2026-05-16T01:46:08.1212682Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.1214628Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.1216442Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.1218529Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-05-16T01:46:08.1219477Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.1221461Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.1222679Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-05-16T01:46:08.1224617Z         	Messages:   	Project creation failed: test-acc-tf-p-7694956537915279983, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.1225846Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (75.31s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS a second
- 2026-05-19

### Error 2026-05-19T02:05:39+00:00
```
2026-05-19T02:05:39.1891809Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-05-19T02:05:39.1892422Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-7833337324525368799
2026-05-19T02:05:39.1892943Z     plural_data_source_test.go:14: 
2026-05-19T02:05:39.1893919Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T02:05:39.1895552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T02:05:39.1897278Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T02:05:39.1899125Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-05-19T02:05:39.1899918Z         	Error:      	Received unexpected error:
2026-05-19T02:05:39.1901680Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1902682Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-05-19T02:05:39.1904445Z         	Messages:   	Project creation failed: test-acc-tf-p-7833337324525368799, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T02:05:39.1905598Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (72.74s)
```

- 2026-05-20
  - PASS 2 seconds
  - PASS a second
- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6814989Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-05-21T01:56:32.6815638Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-8851206431283050206
2026-05-21T01:56:32.6816182Z     plural_data_source_test.go:14: 
2026-05-21T01:56:32.6817111Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:56:32.6818882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:56:32.6820657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:56:32.6822562Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-05-21T01:56:32.6823599Z         	Error:      	Received unexpected error:
2026-05-21T01:56:32.6825670Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:56:32.6826729Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-05-21T01:56:32.6828478Z         	Messages:   	Project creation failed: test-acc-tf-p-8851206431283050206, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:56:32.6829638Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (63.16s)
```

- 2026-05-22 PASS 2 seconds
- 2026-05-23

### Error 2026-05-23T02:16:58+00:00
```
2026-05-23T02:16:58.5351896Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-05-23T02:16:58.5352556Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-3980397831717043189
2026-05-23T02:16:58.5353210Z     plural_data_source_test.go:14: 
2026-05-23T02:16:58.5354157Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T02:16:58.5355964Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T02:16:58.5357750Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T02:16:58.5359702Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-05-23T02:16:58.5360576Z         	Error:      	Received unexpected error:
2026-05-23T02:16:58.5363102Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:16:58.5364193Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-05-23T02:16:58.5366024Z         	Messages:   	Project creation failed: test-acc-tf-p-3980397831717043189, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:16:58.5367245Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (67.00s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 2 seconds
- 2026-05-26 PASS 3 seconds
- 2026-05-27 PASS 2 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5769983Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-05-28T02:40:17.5770627Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-622167871572131982
2026-05-28T02:40:17.5771169Z     plural_data_source_test.go:14: 
2026-05-28T02:40:17.5772113Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5773911Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5775709Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5777887Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-05-28T02:40:17.5778737Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5780804Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5781886Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-05-28T02:40:17.5783811Z         	Messages:   	Project creation failed: test-acc-tf-p-622167871572131982, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5785056Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (82.17s)
```

- 2026-05-29 PASS 2 seconds
- 2026-05-30

### Error 2026-05-30T02:30:49+00:00
```
2026-05-30T02:30:49.6889473Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-05-30T02:30:49.6890162Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-6811968275903083340
2026-05-30T02:30:49.6890744Z     plural_data_source_test.go:14: 
2026-05-30T02:30:49.6891819Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T02:30:49.6893655Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T02:30:49.6895465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T02:30:49.6897448Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-05-30T02:30:49.6898321Z         	Error:      	Received unexpected error:
2026-05-30T02:30:49.6900310Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6901503Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-05-30T02:30:49.6903330Z         	Messages:   	Project creation failed: test-acc-tf-p-6811968275903083340, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6904546Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (73.95s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 2 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5880891Z === RUN   TestAccStreamsWorkspacesDS_withPageConfig
2026-06-02T01:54:34.5881523Z     plural_data_source_test.go:14: Creating execution project (1): test-acc-tf-p-4704618690668712091
2026-06-02T01:54:34.5882052Z     plural_data_source_test.go:14: 
2026-06-02T01:54:34.5882944Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5884634Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5886490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5888305Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/plural_data_source_test.go:14
2026-06-02T01:54:34.5889111Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5890859Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5891943Z         	Test:       	TestAccStreamsWorkspacesDS_withPageConfig
2026-06-02T01:54:34.5893593Z         	Messages:   	Project creation failed: test-acc-tf-p-4704618690668712091, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5894745Z --- FAIL: TestAccStreamsWorkspacesDS_withPageConfig (64.34s)
```

- 2026-06-03 PASS a second
- 2026-06-04 PASS 2 seconds
- 2026-06-05 PASS a second

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a second
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a second
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a second
- 2026-05-25 PASS 2 seconds
- 2026-05-26 PASS 2 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
