# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.08s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 125.06s
[2026-07-16 03:32](#error-2026-07-16t0332120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.08s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.10s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.00s
[2026-08-03 01:33](#error-2026-08-03t0133290000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.5899730Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-07-09T01:15:21.5900619Z     resource_stream_connection_test.go:188: Creating execution project (1): test-acc-tf-p-1799824292291524053
2026-07-09T01:15:21.5901554Z     resource_stream_connection_test.go:188: 
2026-07-09T01:15:21.5902863Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.5905188Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.5907582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.5909860Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.5912493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:188
2026-07-09T01:15:21.5914143Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.5914903Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.5917581Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.5918971Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-07-09T01:15:21.5921281Z         	Messages:   	Project creation failed: test-acc-tf-p-1799824292291524053, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.5922805Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (63.84s)
```

- 2026-07-10 PASS 6 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7175776Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-07-11T01:30:51.7177105Z     resource_stream_connection_test.go:188: Creating execution project (1): test-acc-tf-p-8768321167980466589
2026-07-11T01:30:51.7178203Z     resource_stream_connection_test.go:188: 
2026-07-11T01:30:51.7180223Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7183584Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7186979Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7190675Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7194637Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:188
2026-07-11T01:30:51.7197020Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:30:51.7197979Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7201851Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7203887Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-07-11T01:30:51.7207218Z         	Messages:   	Project creation failed: test-acc-tf-p-8768321167980466589, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7209729Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (125.64s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14 PASS 14 seconds
- 2026-07-15 PASS 6 seconds
- 2026-07-16

### Error 2026-07-16T03:32:12+00:00
```
2026-07-16T03:32:12.6344541Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-07-16T03:32:12.6345578Z     resource_stream_connection_test.go:188: Creating execution project (1): test-acc-tf-p-7836038136850770338
2026-07-16T03:32:12.6346214Z     resource_stream_connection_test.go:188: 
2026-07-16T03:32:12.6347198Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T03:32:12.6356192Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T03:32:12.6358076Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T03:32:12.6359899Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-16T03:32:12.6361994Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:188
2026-07-16T03:32:12.6363303Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T03:32:12.6363922Z         	Error:      	Received unexpected error:
2026-07-16T03:32:12.6366542Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6367686Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-07-16T03:32:12.6369519Z         	Messages:   	Project creation failed: test-acc-tf-p-7836038136850770338, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6370795Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (80.77s)
```

- 2026-07-17 PASS 7 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0271857Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-07-18T01:45:13.0272596Z     resource_stream_connection_test.go:188: Creating execution project (1): test-acc-tf-p-6842139057648371174
2026-07-18T01:45:13.0273226Z     resource_stream_connection_test.go:188: 
2026-07-18T01:45:13.0274215Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0276781Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0278607Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0280444Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-18T01:45:13.0282539Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:188
2026-07-18T01:45:13.0283857Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:45:13.0284683Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0286647Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0287797Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-07-18T01:45:13.0289639Z         	Messages:   	Project creation failed: test-acc-tf-p-6842139057648371174, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0290911Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (85.96s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3106577Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-07-21T00:59:13.3107329Z     resource_stream_connection_test.go:188: Creating execution project (1): test-acc-tf-p-5986417432795946055
2026-07-21T00:59:13.3107953Z     resource_stream_connection_test.go:188: 
2026-07-21T00:59:13.3108950Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3110805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3112913Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3114782Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3116914Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:188
2026-07-21T00:59:13.3118241Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3118786Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3120778Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3121930Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-07-21T00:59:13.3124229Z         	Messages:   	Project creation failed: test-acc-tf-p-5986417432795946055, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3125537Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (99.00s)
```

- 2026-07-22 PASS 5 seconds
- 2026-07-23 PASS 10 seconds
- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 5 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 4 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 3 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:29+00:00
```
2026-08-03T01:33:29.9886335Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-08-03T01:33:29.9898002Z   
2026-08-03T01:33:29.9898532Z     resource_stream_connection_test.go:222: Step 1/3 error: Error running apply: exit status 1
2026-08-03T01:33:29.9899019Z         
2026-08-03T01:33:29.9899328Z         Error: error creating resource
2026-08-03T01:33:29.9899636Z         
2026-08-03T01:33:29.9900011Z           with mongodbatlas_stream_connection.test,
2026-08-03T01:33:29.9900760Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-08-03T01:33:29.9901477Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-08-03T01:33:29.9901839Z         
2026-08-03T01:33:29.9902078Z         Post
2026-08-03T01:33:29.9902920Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/streams/test-acc-tf-s-8498845148385410232/connections":
2026-08-03T01:33:29.9903668Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:29.9904325Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (5.31s)
```

  - PASS 5 seconds
  - PASS 5 seconds
- 2026-08-04 PASS 6 seconds
- 2026-08-05 PASS 8 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 8 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 10 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 9 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 5 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
