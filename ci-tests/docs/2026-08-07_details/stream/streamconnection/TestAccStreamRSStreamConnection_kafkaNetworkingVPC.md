# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 8)
Success rate: 76.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.09s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 104.03s
[2026-07-16 03:32](#error-2026-07-16t0332120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.05s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.01s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-07-24 04:11](#error-2026-07-24t0411190000) |  | dev | timeout | 2795.09s
[2026-07-27 04:52](#error-2026-07-27t0452300000) |  | dev | timeout | 2573.03s
[2026-08-03 01:33](#error-2026-08-03t0133290000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.5923431Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-09T01:15:21.5924369Z     resource_stream_connection_test.go:227: Creating execution project (1): test-acc-tf-p-2432577873913976227
2026-07-09T01:15:21.5925118Z     resource_stream_connection_test.go:227: 
2026-07-09T01:15:21.5926445Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.5928734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.5931017Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.5933312Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.5936195Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:227
2026-07-09T01:15:21.5937804Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.5938456Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.5940935Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.5942350Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-09T01:15:21.5944600Z         	Messages:   	Project creation failed: test-acc-tf-p-2432577873913976227, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.5946381Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (67.93s)
```

- 2026-07-10 PASS 19 minutes
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7210623Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-11T01:30:51.7211935Z     resource_stream_connection_test.go:227: Creating execution project (1): test-acc-tf-p-9067174064798023063
2026-07-11T01:30:51.7213037Z     resource_stream_connection_test.go:227: 
2026-07-11T01:30:51.7214794Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7218178Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7221954Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7225652Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7229790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:227
2026-07-11T01:30:51.7232169Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:30:51.7233127Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7236735Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7238955Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-11T01:30:51.7242496Z         	Messages:   	Project creation failed: test-acc-tf-p-9067174064798023063, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7244817Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (104.25s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 32 minutes
- 2026-07-14 PASS 14 minutes
- 2026-07-15 PASS 29 minutes
- 2026-07-16

### Error 2026-07-16T03:32:12+00:00
```
2026-07-16T03:32:12.6371309Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-16T03:32:12.6372059Z     resource_stream_connection_test.go:227: Creating execution project (1): test-acc-tf-p-7226754056388229028
2026-07-16T03:32:12.6372884Z     resource_stream_connection_test.go:227: 
2026-07-16T03:32:12.6373862Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T03:32:12.6375965Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T03:32:12.6377788Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T03:32:12.6379600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-16T03:32:12.6381672Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:227
2026-07-16T03:32:12.6382980Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T03:32:12.6383525Z         	Error:      	Received unexpected error:
2026-07-16T03:32:12.6385697Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6386847Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-16T03:32:12.6388828Z         	Messages:   	Project creation failed: test-acc-tf-p-7226754056388229028, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6390114Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (96.52s)
```

- 2026-07-17 PASS 29 minutes
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0291421Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-18T01:45:13.0292366Z     resource_stream_connection_test.go:227: Creating execution project (1): test-acc-tf-p-7833457288998968973
2026-07-18T01:45:13.0292988Z     resource_stream_connection_test.go:227: 
2026-07-18T01:45:13.0293961Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0296209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0298052Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0299906Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-18T01:45:13.0302011Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:227
2026-07-18T01:45:13.0303334Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:45:13.0303879Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0306236Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0307393Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-18T01:45:13.0309381Z         	Messages:   	Project creation failed: test-acc-tf-p-7833457288998968973, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0310695Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (107.06s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3126058Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-21T00:59:13.3126808Z     resource_stream_connection_test.go:227: Creating execution project (1): test-acc-tf-p-3329476483082349058
2026-07-21T00:59:13.3127439Z     resource_stream_connection_test.go:227: 
2026-07-21T00:59:13.3128438Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3130450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3132307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3134422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3136573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:227
2026-07-21T00:59:13.3137896Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3138442Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3140435Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3141599Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-21T00:59:13.3144110Z         	Messages:   	Project creation failed: test-acc-tf-p-3329476483082349058, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3145419Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (62.11s)
```

- 2026-07-22 PASS 49 minutes
- 2026-07-23 PASS 41 minutes
- 2026-07-24

### Error 2026-07-24T04:11:19+00:00
```
2026-07-24T04:11:19.0478389Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-24T04:11:19.0494319Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/4ee317f7-1ab4-4876-8652-7cce68215282/terraform
2026-07-24T04:11:19.0495959Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-07-24T04:11:19.0496714Z         
2026-07-24T04:11:19.0497349Z         Error: error waiting for stream connection to be ready
2026-07-24T04:11:19.0497912Z         
2026-07-24T04:11:19.0498664Z           with mongodbatlas_stream_connection.test,
2026-07-24T04:11:19.0499872Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-07-24T04:11:19.0500985Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-07-24T04:11:19.0501583Z         
2026-07-24T04:11:19.0502380Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-07-24T04:11:19.0503166Z         'PENDING', timeout: 40m0s)
2026-07-24T04:11:19.0503934Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (2795.90s)
```

- 2026-07-25 PASS 15 minutes
- 2026-07-26: MISSING
- 2026-07-27

### Error 2026-07-27T04:52:30+00:00
```
2026-07-27T04:52:30.3431163Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-07-27T04:52:30.3447692Z    test_step_number=1 test_working_directory=/tmp/plugintest4040821188 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/7ed39aff-cd81-43ba-a8b0-12dcb4cfe919/terraform
2026-07-27T04:52:30.3449832Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-07-27T04:52:30.3450658Z         
2026-07-27T04:52:30.3451350Z         Error: error waiting for stream connection to be ready
2026-07-27T04:52:30.3451975Z         
2026-07-27T04:52:30.3452616Z           with mongodbatlas_stream_connection.test,
2026-07-27T04:52:30.3453989Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-07-27T04:52:30.3455186Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-07-27T04:52:30.3456003Z         
2026-07-27T04:52:30.3456966Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-07-27T04:52:30.3457842Z         'PENDING', timeout: 40m0s)
2026-07-27T04:52:30.3458599Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (2573.30s)
```

- 2026-07-28 PASS 31 minutes
- 2026-07-29 PASS 32 minutes
- 2026-07-30 PASS 48 minutes
- 2026-07-31 PASS 13 minutes
- 2026-08-01 PASS 13 minutes
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:29+00:00
```
2026-08-03T01:33:29.9904884Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-08-03T01:33:29.9915776Z   
2026-08-03T01:33:29.9916279Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:29.9916759Z         
2026-08-03T01:33:29.9917887Z         Error: error creating MongoDB Network Peering Container: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/containers": dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:29.9918730Z         
2026-08-03T01:33:29.9919108Z           with mongodbatlas_network_container.test,
2026-08-03T01:33:29.9919835Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-08-03T01:33:29.9920526Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-08-03T01:33:29.9921127Z         
2026-08-03T01:33:29.9921754Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (5.31s)
```

  - PASS 14 minutes
  - PASS 14 minutes
- 2026-08-04 PASS 15 minutes
- 2026-08-05 PASS 14 minutes
- 2026-08-06 PASS 14 minutes
- 2026-08-07 PASS 13 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 22 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 23 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 14 minutes
  - PASS 22 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 14 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
