# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.02s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.04s
[2026-08-03 01:33](#error-2026-08-03t0133290000) |  | dev | flaky_client | 5.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.5969931Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-07-09T01:15:21.5970774Z     resource_stream_connection_test.go:296: Creating execution project (1): test-acc-tf-p-4527919911706944556
2026-07-09T01:15:21.5971537Z     resource_stream_connection_test.go:296: 
2026-07-09T01:15:21.5972736Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.5975017Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.5977419Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.5979840Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T01:15:21.5982449Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:303
2026-07-09T01:15:21.5984454Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:296
2026-07-09T01:15:21.5985151Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.5986882Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.5987725Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-07-09T01:15:21.5989246Z         	Messages:   	Project creation failed: test-acc-tf-p-4527919911706944556, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.5990237Z --- FAIL: TestAccStreamRSStreamConnection_cluster (65.22s)
```

- 2026-07-10 PASS 3 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7280147Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-07-11T01:30:51.7281394Z     resource_stream_connection_test.go:296: Creating execution project (1): test-acc-tf-p-4650886260236937187
2026-07-11T01:30:51.7282478Z     resource_stream_connection_test.go:296: 
2026-07-11T01:30:51.7284245Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7287610Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7291582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7294975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T01:30:51.7299072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:303
2026-07-11T01:30:51.7303182Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:296
2026-07-11T01:30:51.7304798Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7308991Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7310974Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-07-11T01:30:51.7314230Z         	Messages:   	Project creation failed: test-acc-tf-p-4650886260236937187, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7316415Z --- FAIL: TestAccStreamRSStreamConnection_cluster (63.15s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 seconds
- 2026-07-14 PASS 24 minutes
- 2026-07-15 PASS 3 seconds
- 2026-07-16 PASS 38 minutes
- 2026-07-17 PASS 4 seconds
- 2026-07-18 PASS 13 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3164905Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-07-21T00:59:13.3165695Z     resource_stream_connection_test.go:296: Creating execution project (1): test-acc-tf-p-5958499409669018554
2026-07-21T00:59:13.3166576Z     resource_stream_connection_test.go:296: 
2026-07-21T00:59:13.3167810Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3169841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3171883Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3174132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T00:59:13.3176505Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:303
2026-07-21T00:59:13.3178905Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:296
2026-07-21T00:59:13.3190783Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3193298Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3194461Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-07-21T00:59:13.3196314Z         	Messages:   	Project creation failed: test-acc-tf-p-5958499409669018554, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3197571Z --- FAIL: TestAccStreamRSStreamConnection_cluster (87.37s)
```

- 2026-07-22 PASS 3 seconds
- 2026-07-23 PASS 33 minutes
- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 22 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 52 minutes
- 2026-07-28 PASS 57 minutes
- 2026-07-29 PASS 2 seconds
- 2026-07-30 PASS 48 minutes
- 2026-07-31 PASS 2 seconds
- 2026-08-01 PASS 12 minutes
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:29+00:00
```
2026-08-03T01:33:29.9941791Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-08-03T01:33:29.9942483Z     resource_stream_connection_test.go:296: Creating execution cluster: test-acc-tf-c-1530728859501639883
2026-08-03T01:33:29.9943082Z     resource_stream_connection_test.go:296: 
2026-08-03T01:33:29.9944063Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-08-03T01:33:29.9946148Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-08-03T01:33:29.9948250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:303
2026-08-03T01:33:29.9950472Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:296
2026-08-03T01:33:29.9951381Z         	Error:      	Received unexpected error:
2026-08-03T01:33:29.9952870Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/clusters": dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:29.9953709Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-08-03T01:33:29.9955346Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1530728859501639883, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/clusters": dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:29.9956321Z --- FAIL: TestAccStreamRSStreamConnection_cluster (5.00s)
```

  - PASS 3 seconds
  - PASS 3 seconds
- 2026-08-04 PASS 13 minutes
- 2026-08-05 PASS 5 seconds
- 2026-08-06 PASS 14 minutes
- 2026-08-07 PASS 5 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 4 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 5 seconds
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
  - PASS 12 minutes
  - PASS 2 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
