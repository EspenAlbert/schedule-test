# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.06s
[2026-05-30 02:30](#error-2026-05-30t0230490000) |  | dev | timeout | 3149.01s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 100.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 43 minutes
  - PASS 30 minutes
- 2026-05-08 PASS 9 seconds
- 2026-05-09
  - PASS 7 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1114674Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-05-09T01:47:38.1115351Z     resource_stream_connection_test.go:296: Creating execution project (1): test-acc-tf-p-3596092637649671810
2026-05-09T01:47:38.1116120Z     resource_stream_connection_test.go:296: 
2026-05-09T01:47:38.1117069Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1118865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1120662Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1122775Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-09T01:47:38.1125283Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:303
2026-05-09T01:47:38.1127486Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:296
2026-05-09T01:47:38.1128364Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1130305Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1131596Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-05-09T01:47:38.1134094Z         	Messages:   	Project creation failed: test-acc-tf-p-3596092637649671810, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1135330Z --- FAIL: TestAccStreamRSStreamConnection_cluster (66.58s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 17 minutes
- 2026-05-13 PASS 9 seconds
- 2026-05-14 PASS 27 minutes
- 2026-05-15 PASS 8 seconds
- 2026-05-16 PASS 12 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 9 seconds
- 2026-05-19 PASS 15 minutes
- 2026-05-20
  - PASS 9 seconds
  - PASS 8 seconds
- 2026-05-21 PASS 14 minutes
- 2026-05-22 PASS 7 seconds
- 2026-05-23 PASS 21 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 15 minutes
- 2026-05-27 PASS 5 seconds
- 2026-05-28 PASS 24 minutes
- 2026-05-29 PASS 5 seconds
- 2026-05-30

### Error 2026-05-30T02:30:49+00:00
```
2026-05-30T02:30:49.6617130Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-05-30T02:30:49.6617866Z     resource_stream_connection_test.go:296: Creating execution project (1): test-acc-tf-p-6111896464928183059
2026-05-30T02:30:49.6618727Z     resource_stream_connection_test.go:296: Creating execution cluster: test-acc-tf-c-1139800125048899978
2026-05-30T02:30:49.6619349Z 2026/05/30 01:06:50 [DEBUG] Waiting for state to become: [IDLE]
2026-05-30T02:30:49.6619962Z 2026/05/30 01:09:51 [TRACE] Waiting 1m0s before next try
2026-05-30T02:30:49.6620389Z 2026/05/30 01:10:51 [TRACE] Waiting 10s before next try
2026-05-30T02:30:49.6620956Z 2026/05/30 01:11:01 [TRACE] Waiting 1m0s before next try
2026-05-30T02:30:49.6621603Z 2026/05/30 01:12:01 [TRACE] Waiting 10s before next try
2026-05-30T02:30:49.6622026Z 2026/05/30 01:12:12 [TRACE] Waiting 1m0s before next try
2026-05-30T02:30:49.6622419Z 2026/05/30 01:13:12 [TRACE] Waiting 10s before next try
2026-05-30T02:30:49.6622808Z 2026/05/30 01:13:22 [TRACE] Waiting 1m0s before next try
2026-05-30T02:30:49.6623196Z 2026/05/30 01:14:22 [TRACE] Waiting 10s before next try
2026-05-30T02:30:49.6623589Z 2026/05/30 01:14:33 [TRACE] Waiting 1m0s before next try
2026-05-30T02:30:49.6623976Z 2026/05/30 01:15:33 [TRACE] Waiting 10s before next try
2026-05-30T02:30:49.6624366Z 2026/05/30 01:15:43 [TRACE] Waiting 1m0s before next try
2026-05-30T02:30:49.6624782Z 2026/05/30 01:16:44 [TRACE] Waiting 10s before next try
2026-05-30T02:30:49.6625213Z 2026/05/30 01:16:54 [TRACE] Waiting 1m0s before next try
2026-05-30T02:30:49.6625618Z 2026/05/30 01:17:54 [TRACE] Waiting 10s before next try
2026-05-30T02:30:49.6626480Z     resource_stream_connection_test.go:296: Creating execution stream instance: test-acc-tf-s-6104014269560525515
2026-05-30T02:30:49.6637053Z   
2026-05-30T02:30:49.6637598Z     resource_stream_connection_test.go:297: Step 1/2 error: Error running apply: exit status 1
2026-05-30T02:30:49.6638113Z         
2026-05-30T02:30:49.6638557Z         Error: error waiting for stream connection to be ready
2026-05-30T02:30:49.6638947Z         
2026-05-30T02:30:49.6639359Z           with mongodbatlas_stream_connection.test,
2026-05-30T02:30:49.6640112Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-05-30T02:30:49.6640932Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-30T02:30:49.6641328Z         
2026-05-30T02:30:49.6641843Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-30T02:30:49.6642361Z         'PENDING', timeout: 40m0s)
2026-05-30T02:30:49.6642788Z --- FAIL: TestAccStreamRSStreamConnection_cluster (3149.12s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 4 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5563279Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-06-02T01:54:34.5563953Z     resource_stream_connection_test.go:296: Creating execution project (1): test-acc-tf-p-1795509362395950825
2026-06-02T01:54:34.5564545Z     resource_stream_connection_test.go:296: 
2026-06-02T01:54:34.5565614Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5567280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5568929Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5570596Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-06-02T01:54:34.5572509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:303
2026-06-02T01:54:34.5574540Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:296
2026-06-02T01:54:34.5575511Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5577385Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5578413Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-06-02T01:54:34.5580055Z         	Messages:   	Project creation failed: test-acc-tf-p-1795509362395950825, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5581247Z --- FAIL: TestAccStreamRSStreamConnection_cluster (100.65s)
```

- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 43 minutes
- 2026-06-05 PASS 3 seconds

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
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 9 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 4 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
