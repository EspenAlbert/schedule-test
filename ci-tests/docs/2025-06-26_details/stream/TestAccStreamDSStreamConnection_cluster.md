# stream/TestAccStreamDSStreamConnection_cluster Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 9 minutes
```
2025-06-20T00:45:53.6778760Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-06-20T00:45:53.6779938Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-633894959191019905
2025-06-20T00:45:53.6780962Z 2025/06/20 00:28:54 [DEBUG] Waiting for state to become: [IDLE]
2025-06-20T00:45:53.6781684Z 2025/06/20 00:31:55 [TRACE] Waiting 1m0s before next try
2025-06-20T00:45:53.6782346Z 2025/06/20 00:32:55 [TRACE] Waiting 10s before next try
2025-06-20T00:45:53.6782971Z 2025/06/20 00:33:05 [TRACE] Waiting 1m0s before next try
2025-06-20T00:45:53.6783545Z 2025/06/20 00:34:05 [TRACE] Waiting 10s before next try
2025-06-20T00:45:53.6784173Z 2025/06/20 00:34:15 [TRACE] Waiting 1m0s before next try
2025-06-20T00:45:53.6784983Z 2025/06/20 00:35:15 [TRACE] Waiting 10s before next try
2025-06-20T00:45:53.6785630Z 2025/06/20 00:35:26 [TRACE] Waiting 1m0s before next try
2025-06-20T00:45:53.6786366Z 2025/06/20 00:36:26 [TRACE] Waiting 10s before next try
2025-06-20T00:45:53.6787030Z 2025/06/20 00:36:36 [TRACE] Waiting 1m0s before next try
2025-06-20T00:45:53.6787700Z 2025/06/20 00:37:36 [TRACE] Waiting 10s before next try
2025-06-20T00:45:53.6788403Z 2025/06/20 00:37:46 [TRACE] Waiting 1m0s before next try
2025-06-20T00:45:53.6831157Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-06-20T00:45:53.6834865Z --- PASS: TestAccStreamDSStreamConnection_cluster (598.52s)
```
### 2025-06-21
#### PASS 8 minutes
```
2025-06-21T00:43:49.5353718Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-06-21T00:43:49.5354817Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-3285392129372806633
2025-06-21T00:43:49.5355748Z 2025/06/21 00:28:41 [DEBUG] Waiting for state to become: [IDLE]
2025-06-21T00:43:49.5356396Z 2025/06/21 00:31:41 [TRACE] Waiting 1m0s before next try
2025-06-21T00:43:49.5357012Z 2025/06/21 00:32:41 [TRACE] Waiting 10s before next try
2025-06-21T00:43:49.5357616Z 2025/06/21 00:32:51 [TRACE] Waiting 1m0s before next try
2025-06-21T00:43:49.5358222Z 2025/06/21 00:33:51 [TRACE] Waiting 10s before next try
2025-06-21T00:43:49.5359015Z 2025/06/21 00:34:01 [TRACE] Waiting 1m0s before next try
2025-06-21T00:43:49.5359615Z 2025/06/21 00:35:02 [TRACE] Waiting 10s before next try
2025-06-21T00:43:49.5360194Z 2025/06/21 00:35:12 [TRACE] Waiting 1m0s before next try
2025-06-21T00:43:49.5360779Z 2025/06/21 00:36:12 [TRACE] Waiting 10s before next try
2025-06-21T00:43:49.5361338Z 2025/06/21 00:36:22 [TRACE] Waiting 1m0s before next try
2025-06-21T00:43:49.5389144Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-06-21T00:43:49.5418897Z --- PASS: TestAccStreamDSStreamConnection_cluster (528.36s)
```
### 2025-06-22
#### FAIL 10 minutes
```
2025-06-22T00:49:55.7938849Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-06-22T00:49:55.7939946Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-4325048252218596100
2025-06-22T00:49:55.7940584Z 2025/06/22 00:31:56 [DEBUG] Waiting for state to become: [IDLE]
2025-06-22T00:49:55.7940971Z 2025/06/22 00:34:56 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7941331Z 2025/06/22 00:35:57 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.7941692Z 2025/06/22 00:36:07 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7942317Z 2025/06/22 00:37:07 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.7942807Z 2025/06/22 00:37:18 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7943194Z 2025/06/22 00:38:18 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.7943556Z 2025/06/22 00:38:28 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7943908Z 2025/06/22 00:39:28 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.7944263Z 2025/06/22 00:39:39 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7944609Z 2025/06/22 00:40:39 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.7944956Z 2025/06/22 00:40:49 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7959253Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-06-22T00:49:55.7989429Z === NAME  TestAccStreamDSStreamConnection_cluster
2025-06-22T00:49:55.7989995Z     data_source_stream_connection_test.go:55: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:49:55.7990410Z         
2025-06-22T00:49:55.7990675Z         Error: error creating resource
2025-06-22T00:49:55.7990929Z         
2025-06-22T00:49:55.7991246Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.7991869Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.7992721Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.7993023Z         
2025-06-22T00:49:55.7993516Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams
2025-06-22T00:49:55.7994186Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.7994749Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.7995126Z         BadRequestDetail: 
2025-06-22T00:49:55.8009161Z    test_name=TestAccStreamRSStreamConnection_cluster test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_working_directory=/tmp/plugintest811532831
2025-06-22T00:49:55.8045348Z --- FAIL: TestAccStreamDSStreamConnection_cluster (625.82s)
```
### 2025-06-23
#### PASS 8 minutes
```
2025-06-23T00:45:53.8781594Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-06-23T00:45:53.8782808Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-4615902671185723873
2025-06-23T00:45:53.8784041Z 2025/06/23 00:31:16 [DEBUG] Waiting for state to become: [IDLE]
2025-06-23T00:45:53.8784744Z 2025/06/23 00:34:17 [TRACE] Waiting 1m0s before next try
2025-06-23T00:45:53.8785420Z 2025/06/23 00:35:17 [TRACE] Waiting 10s before next try
2025-06-23T00:45:53.8786158Z 2025/06/23 00:35:27 [TRACE] Waiting 1m0s before next try
2025-06-23T00:45:53.8786820Z 2025/06/23 00:36:28 [TRACE] Waiting 10s before next try
2025-06-23T00:45:53.8787493Z 2025/06/23 00:36:38 [TRACE] Waiting 1m0s before next try
2025-06-23T00:45:53.8788158Z 2025/06/23 00:37:38 [TRACE] Waiting 10s before next try
2025-06-23T00:45:53.8788819Z 2025/06/23 00:37:48 [TRACE] Waiting 1m0s before next try
2025-06-23T00:45:53.8789411Z 2025/06/23 00:38:49 [TRACE] Waiting 10s before next try
2025-06-23T00:45:53.8789988Z 2025/06/23 00:38:59 [TRACE] Waiting 1m0s before next try
2025-06-23T00:45:53.8811086Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-06-23T00:45:53.8819457Z --- PASS: TestAccStreamDSStreamConnection_cluster (530.61s)
```
### 2025-06-24
#### PASS 9 minutes
```
2025-06-24T00:45:42.3170099Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-06-24T00:45:42.3171148Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-5061454779466315409
2025-06-24T00:45:42.3172115Z 2025/06/24 00:29:05 [DEBUG] Waiting for state to become: [IDLE]
2025-06-24T00:45:42.3172765Z 2025/06/24 00:32:05 [TRACE] Waiting 1m0s before next try
2025-06-24T00:45:42.3173386Z 2025/06/24 00:33:06 [TRACE] Waiting 10s before next try
2025-06-24T00:45:42.3173997Z 2025/06/24 00:33:16 [TRACE] Waiting 1m0s before next try
2025-06-24T00:45:42.3174611Z 2025/06/24 00:34:16 [TRACE] Waiting 10s before next try
2025-06-24T00:45:42.3175254Z 2025/06/24 00:34:26 [TRACE] Waiting 1m0s before next try
2025-06-24T00:45:42.3175909Z 2025/06/24 00:35:26 [TRACE] Waiting 10s before next try
2025-06-24T00:45:42.3176549Z 2025/06/24 00:35:36 [TRACE] Waiting 1m0s before next try
2025-06-24T00:45:42.3177153Z 2025/06/24 00:36:36 [TRACE] Waiting 10s before next try
2025-06-24T00:45:42.3177778Z 2025/06/24 00:36:46 [TRACE] Waiting 1m0s before next try
2025-06-24T00:45:42.3178412Z 2025/06/24 00:37:46 [TRACE] Waiting 10s before next try
2025-06-24T00:45:42.3179244Z 2025/06/24 00:37:57 [TRACE] Waiting 1m0s before next try
2025-06-24T00:45:42.3216402Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-06-24T00:45:42.3219240Z --- PASS: TestAccStreamDSStreamConnection_cluster (597.77s)
```
### 2025-06-25
#### PASS 8 minutes
```
2025-06-25T00:45:03.6001865Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-06-25T00:45:03.6002954Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-6430566860777783306
2025-06-25T00:45:03.6003890Z 2025/06/25 00:29:24 [DEBUG] Waiting for state to become: [IDLE]
2025-06-25T00:45:03.6027718Z 2025/06/25 00:32:24 [TRACE] Waiting 1m0s before next try
2025-06-25T00:45:03.6028406Z 2025/06/25 00:33:25 [TRACE] Waiting 10s before next try
2025-06-25T00:45:03.6029034Z 2025/06/25 00:33:35 [TRACE] Waiting 1m0s before next try
2025-06-25T00:45:03.6029655Z 2025/06/25 00:34:35 [TRACE] Waiting 10s before next try
2025-06-25T00:45:03.6030239Z 2025/06/25 00:34:45 [TRACE] Waiting 1m0s before next try
2025-06-25T00:45:03.6030821Z 2025/06/25 00:35:45 [TRACE] Waiting 10s before next try
2025-06-25T00:45:03.6031412Z 2025/06/25 00:35:55 [TRACE] Waiting 1m0s before next try
2025-06-25T00:45:03.6031982Z 2025/06/25 00:36:55 [TRACE] Waiting 10s before next try
2025-06-25T00:45:03.6032551Z 2025/06/25 00:37:06 [TRACE] Waiting 1m0s before next try
2025-06-25T00:45:03.6054698Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-06-25T00:45:03.6063790Z --- PASS: TestAccStreamDSStreamConnection_cluster (528.46s)
```
#### PASS 8 minutes
```
2025-06-25T06:57:33.8252115Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-06-25T06:57:33.8253178Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-2541576666823860597
2025-06-25T06:57:33.8253878Z 2025/06/25 06:41:34 [DEBUG] Waiting for state to become: [IDLE]
2025-06-25T06:57:33.8254409Z 2025/06/25 06:44:35 [TRACE] Waiting 1m0s before next try
2025-06-25T06:57:33.8254813Z 2025/06/25 06:45:35 [TRACE] Waiting 10s before next try
2025-06-25T06:57:33.8255289Z 2025/06/25 06:45:45 [TRACE] Waiting 1m0s before next try
2025-06-25T06:57:33.8255703Z 2025/06/25 06:46:45 [TRACE] Waiting 10s before next try
2025-06-25T06:57:33.8256107Z 2025/06/25 06:46:55 [TRACE] Waiting 1m0s before next try
2025-06-25T06:57:33.8256522Z 2025/06/25 06:47:55 [TRACE] Waiting 10s before next try
2025-06-25T06:57:33.8256924Z 2025/06/25 06:48:06 [TRACE] Waiting 1m0s before next try
2025-06-25T06:57:33.8257474Z 2025/06/25 06:49:06 [TRACE] Waiting 10s before next try
2025-06-25T06:57:33.8257981Z 2025/06/25 06:49:16 [TRACE] Waiting 1m0s before next try
2025-06-25T06:57:33.8276531Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-06-25T06:57:33.8279633Z --- PASS: TestAccStreamDSStreamConnection_cluster (528.51s)
```
### 2025-06-26
#### PASS 8 minutes
```
2025-06-26T00:44:37.3123836Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-06-26T00:44:37.3124545Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-8847254285939202156
2025-06-26T00:44:37.3125162Z 2025/06/26 00:29:21 [DEBUG] Waiting for state to become: [IDLE]
2025-06-26T00:44:37.3125590Z 2025/06/26 00:32:21 [TRACE] Waiting 1m0s before next try
2025-06-26T00:44:37.3126001Z 2025/06/26 00:33:21 [TRACE] Waiting 10s before next try
2025-06-26T00:44:37.3126398Z 2025/06/26 00:33:32 [TRACE] Waiting 1m0s before next try
2025-06-26T00:44:37.3126788Z 2025/06/26 00:34:32 [TRACE] Waiting 10s before next try
2025-06-26T00:44:37.3127176Z 2025/06/26 00:34:42 [TRACE] Waiting 1m0s before next try
2025-06-26T00:44:37.3127562Z 2025/06/26 00:35:42 [TRACE] Waiting 10s before next try
2025-06-26T00:44:37.3127942Z 2025/06/26 00:35:52 [TRACE] Waiting 1m0s before next try
2025-06-26T00:44:37.3128324Z 2025/06/26 00:36:52 [TRACE] Waiting 10s before next try
2025-06-26T00:44:37.3128705Z 2025/06/26 00:37:02 [TRACE] Waiting 1m0s before next try
2025-06-26T00:44:37.3159607Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-06-26T00:44:37.3165825Z --- PASS: TestAccStreamDSStreamConnection_cluster (527.47s)
```
#### PASS 7 minutes
```
2025-06-26T04:28:17.6329146Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-06-26T04:28:17.6330643Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-3252624116790801895
2025-06-26T04:28:17.6331923Z 2025/06/26 04:14:07 [DEBUG] Waiting for state to become: [IDLE]
2025-06-26T04:28:17.6332797Z 2025/06/26 04:17:07 [TRACE] Waiting 1m0s before next try
2025-06-26T04:28:17.6333631Z 2025/06/26 04:18:07 [TRACE] Waiting 10s before next try
2025-06-26T04:28:17.6334279Z 2025/06/26 04:18:17 [TRACE] Waiting 1m0s before next try
2025-06-26T04:28:17.6334908Z 2025/06/26 04:19:18 [TRACE] Waiting 10s before next try
2025-06-26T04:28:17.6335560Z 2025/06/26 04:19:28 [TRACE] Waiting 1m0s before next try
2025-06-26T04:28:17.6336220Z 2025/06/26 04:20:28 [TRACE] Waiting 10s before next try
2025-06-26T04:28:17.6336846Z 2025/06/26 04:20:38 [TRACE] Waiting 1m0s before next try
2025-06-26T04:28:17.6337468Z 2025/06/26 04:21:38 [TRACE] Waiting 10s before next try
2025-06-26T04:28:17.6376634Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-06-26T04:28:17.6380472Z --- PASS: TestAccStreamDSStreamConnection_cluster (468.31s)
```