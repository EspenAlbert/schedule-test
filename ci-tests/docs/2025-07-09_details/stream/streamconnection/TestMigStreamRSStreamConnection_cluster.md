# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 132 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 125) FAIL(x 7)
Success rate: 94.70%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-16 00:45 | dev | 8.01s
2025-04-16 12:49 | qa | 9.09s
2025-04-16 14:37 | dev | 9.07s
2025-04-17 00:44 | dev | 7.09s
2025-05-11 00:29 | qa | 0.00s
2025-06-05 01:03 | dev | 180.07s
2025-06-22 00:49 | qa | 64.05s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 8 seconds
### 2025-04-12
#### PASS 8 seconds
### 2025-04-13
#### PASS 8 seconds
### 2025-04-14
#### PASS 11 seconds
### 2025-04-15
#### PASS 8 seconds
### 2025-04-16
#### FAIL 8 seconds
```
2025-04-16T00:45:12.2909971Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-04-16T00:45:12.2951971Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-04-16T00:45:12.3236155Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-04-16T00:45:12.3236895Z     resource_stream_connection_migration_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3237431Z         
2025-04-16T00:45:12.3237709Z         Error: error deleting resource
2025-04-16T00:45:12.3237970Z         
2025-04-16T00:45:12.3238858Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-1820653706892884130/connections/ConnectionNameCluster
2025-04-16T00:45:12.3239771Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3240373Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3240786Z         BadRequestDetail: 
2025-04-16T00:45:12.3241102Z --- FAIL: TestMigStreamRSStreamConnection_cluster (8.10s)
```
#### FAIL 9 seconds
```
2025-04-16T12:49:32.7940257Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-04-16T12:49:32.7997105Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-04-16T12:49:32.8292231Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-04-16T12:49:32.8292963Z     resource_stream_connection_migration_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8293508Z         
2025-04-16T12:49:32.8293790Z         Error: error deleting resource
2025-04-16T12:49:32.8294055Z         
2025-04-16T12:49:32.8294943Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-5361634761925604055/connections/ConnectionNameCluster
2025-04-16T12:49:32.8296158Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8296763Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8297191Z         BadRequestDetail: 
2025-04-16T12:49:32.8297509Z --- FAIL: TestMigStreamRSStreamConnection_cluster (9.90s)
```
#### FAIL 9 seconds
```
2025-04-16T14:37:26.9931141Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-04-16T14:37:26.9974829Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-04-16T14:37:27.0283264Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-04-16T14:37:27.0284420Z     resource_stream_connection_migration_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0284994Z         
2025-04-16T14:37:27.0285267Z         Error: error deleting resource
2025-04-16T14:37:27.0285542Z         
2025-04-16T14:37:27.0286433Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-9034330638449817706/connections/ConnectionNameCluster
2025-04-16T14:37:27.0287344Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0287949Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0288359Z         BadRequestDetail: 
2025-04-16T14:37:27.0299122Z    test_name=TestMigStreamRSStreamConnection_kafkaPlaintext test_terraform_path=/home/runner/work/_temp/cbd85b3d-89a9-420b-96e9-da4975fd1b27/terraform
2025-04-16T14:37:27.0305042Z --- FAIL: TestMigStreamRSStreamConnection_cluster (9.74s)
```
### 2025-04-17
#### FAIL 7 seconds
```
2025-04-17T00:44:44.8839435Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-04-17T00:44:44.8916792Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-04-17T00:44:44.9271789Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-04-17T00:44:44.9272559Z     resource_stream_connection_migration_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9273103Z         
2025-04-17T00:44:44.9273386Z         Error: error deleting resource
2025-04-17T00:44:44.9273652Z         
2025-04-17T00:44:44.9274550Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-8813005241511940291/connections/ConnectionNameCluster
2025-04-17T00:44:44.9275458Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9276069Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9276482Z         BadRequestDetail: 
2025-04-17T00:44:44.9276802Z --- FAIL: TestMigStreamRSStreamConnection_cluster (7.93s)
```
### 2025-04-18
#### PASS 11 seconds
### 2025-04-19
#### PASS 9 seconds
### 2025-04-20
#### PASS 8 seconds
### 2025-04-21
#### PASS 10 seconds
### 2025-04-22
#### PASS 10 seconds
### 2025-04-23
#### PASS 8 seconds
### 2025-04-24
#### PASS 11 seconds
### 2025-04-25
#### PASS 9 seconds
### 2025-04-26
#### PASS 9 seconds
### 2025-04-27
#### PASS 9 seconds
### 2025-04-28
#### PASS 9 seconds
### 2025-04-29
#### PASS 9 seconds
### 2025-04-30
#### PASS 10 seconds
#### PASS 9 seconds
### 2025-05-01
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 13 seconds
### 2025-05-02
#### PASS 8 seconds
### 2025-05-03
#### PASS 8 seconds
### 2025-05-04
#### PASS 10 seconds
### 2025-05-05
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-05-06
#### PASS 9 seconds
### 2025-05-07
#### PASS 11 seconds
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 10 seconds
### 2025-05-08
#### PASS 10 seconds
### 2025-05-09
#### PASS 10 seconds
### 2025-05-10
#### PASS 8 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:58.6168013Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-05-11T00:29:58.6169205Z     resource_stream_connection_migration_test.go:17: Creating execution project: test-acc-tf-p-5432411074187298941
2025-05-11T00:29:58.6170370Z     resource_stream_connection_migration_test.go:17: 
2025-05-11T00:29:58.6172326Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6175867Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6179251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:58.6183335Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:145
2025-05-11T00:29:58.6187756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2025-05-11T00:29:58.6189407Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6191086Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6192330Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2025-05-11T00:29:58.6194264Z         	Messages:   	Project creation failed: test-acc-tf-p-5432411074187298941, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6195590Z --- FAIL: TestMigStreamRSStreamConnection_cluster (0.02s)
```
### 2025-05-12
#### PASS 11 seconds
### 2025-05-13
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-05-14
#### PASS 9 seconds
### 2025-05-15
#### PASS 8 seconds
### 2025-05-16
#### PASS 8 seconds
### 2025-05-17
#### PASS 8 seconds
### 2025-05-18
#### PASS 10 seconds
### 2025-05-19
#### PASS 10 seconds
### 2025-05-20
#### PASS 8 seconds
#### PASS 10 seconds
### 2025-05-21
#### PASS 10 seconds
### 2025-05-22
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-05-23
#### PASS 10 seconds
### 2025-05-24
#### PASS 8 seconds
### 2025-05-25
#### PASS 8 seconds
### 2025-05-26
#### PASS 10 seconds
### 2025-05-27
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-05-28
#### PASS 10 seconds
#### PASS 8 seconds
### 2025-05-29
#### PASS 8 seconds
#### PASS 10 seconds
### 2025-05-30
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-05-31
#### PASS 8 seconds
### 2025-06-01
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-06-02
#### PASS 10 seconds
#### PASS 10 seconds
#### PASS 13 seconds
### 2025-06-03
#### PASS 9 seconds
#### PASS 10 seconds
#### PASS 8 seconds
### 2025-06-04
#### PASS 10 seconds
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T01:03:58.7031760Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-06-05T01:03:58.7032451Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-1484348043468646152
2025-06-05T01:03:58.7033032Z 2025/06/05 00:31:56 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T01:03:58.7033487Z     resource_stream_connection_migration_test.go:17: 
2025-06-05T01:03:58.7034670Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T01:03:58.7037545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T01:03:58.7040155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:145
2025-06-05T01:03:58.7042358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2025-06-05T01:03:58.7043248Z         	Error:      	Received unexpected error:
2025-06-05T01:03:58.7045833Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c5161ca93c1f0526c1/clusters/test-acc-tf-c-1484348043468646152 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:03:58.7047107Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2025-06-05T01:03:58.7049289Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1484348043468646152, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c5161ca93c1f0526c1/clusters/test-acc-tf-c-1484348043468646152 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:03:58.7050722Z --- FAIL: TestMigStreamRSStreamConnection_cluster (180.69s)
```
### 2025-06-06
#### PASS 8 seconds
### 2025-06-07
#### PASS 8 seconds
### 2025-06-08
#### PASS 8 seconds
### 2025-06-09
#### PASS 8 seconds
### 2025-06-10
#### PASS 10 seconds
### 2025-06-11
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-06-12
#### PASS 9 seconds
### 2025-06-13
#### PASS 10 seconds
### 2025-06-14
#### PASS 9 seconds
### 2025-06-15
#### PASS 10 seconds
### 2025-06-16
#### PASS 8 seconds
### 2025-06-17
#### PASS 8 seconds
### 2025-06-18
#### PASS 10 seconds
#### PASS 10 seconds
### 2025-06-19
#### PASS 8 seconds
### 2025-06-20
#### PASS 8 seconds
### 2025-06-21
#### PASS 8 seconds
### 2025-06-22
#### FAIL a minute
```
2025-06-22T00:49:55.7948816Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-06-22T00:49:55.7956864Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-06-22T00:49:55.8119279Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-06-22T00:49:55.8119881Z     resource_stream_connection_migration_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:49:55.8120318Z         
2025-06-22T00:49:55.8120580Z         Error: error creating resource
2025-06-22T00:49:55.8120838Z         
2025-06-22T00:49:55.8121157Z           with mongodbatlas_stream_connection.test,
2025-06-22T00:49:55.8121797Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-06-22T00:49:55.8122516Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-06-22T00:49:55.8122824Z         
2025-06-22T00:49:55.8123562Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-892385204726615978/connections
2025-06-22T00:49:55.8124397Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8124974Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8125350Z         BadRequestDetail: 
2025-06-22T00:49:55.8135084Z    test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_working_directory=/tmp/plugintest2856699701 test_step_number=2
2025-06-22T00:49:55.8251482Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-06-22T00:49:55.8252166Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8252581Z         
2025-06-22T00:49:55.8252860Z         Error: error during resource delete
2025-06-22T00:49:55.8253121Z         
2025-06-22T00:49:55.8253780Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-892385204726615978
2025-06-22T00:49:55.8254527Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8255107Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8255511Z         BadRequestDetail: 
2025-06-22T00:49:55.8255814Z --- FAIL: TestMigStreamRSStreamConnection_cluster (64.50s)
```
### 2025-06-23
#### PASS 10 seconds
### 2025-06-24
#### PASS 8 seconds
### 2025-06-25
#### PASS 9 seconds
#### PASS 8 seconds
### 2025-06-26
#### PASS 8 seconds
#### PASS 8 seconds
### 2025-06-27
#### PASS 9 seconds
### 2025-06-28
#### PASS 10 seconds
### 2025-06-29
#### PASS 8 seconds
### 2025-06-30
#### PASS 10 seconds
### 2025-07-01
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 11 seconds
#### PASS 10 seconds
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-07-02
#### PASS 8 seconds
### 2025-07-03
#### PASS 9 seconds
### 2025-07-04
#### PASS 8 seconds
### 2025-07-05
#### PASS 10 seconds
### 2025-07-06
#### PASS 12 seconds
### 2025-07-07
#### PASS 8 seconds
### 2025-07-08
#### PASS 8 seconds
### 2025-07-09
#### PASS 8 seconds