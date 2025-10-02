# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL(x 5)
Success rate: 89.36%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:50](#error-2025-09-07t0050490000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections | qa | flaky_500 | 736.05s
[2025-09-08 09:53](#error-2025-09-08t0953420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-1822128021936268327/connections | qa | flaky_500 | 724.02s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections | qa |  | 524.01s
[2025-09-15 06:36](#error-2025-09-15t0636270000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections | qa | flaky_500 | 524.05s
[2025-09-30 15:25](#error-2025-09-30t1525090000) |  | qa | flaky_client | 316.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 18 minutes
- 2025-09-04 PASS 15 minutes
- 2025-09-05 PASS 13 minutes
- 2025-09-06 PASS 13 minutes
- 2025-09-07

### Error 2025-09-07T00:50:49+00:00
```
2025-09-07T00:50:49.0100535Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-09-07T00:50:49.0101207Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-7658124427802019885
2025-09-07T00:50:49.0101772Z 2025/09/07 00:29:42 [DEBUG] Waiting for state to become: [IDLE]
2025-09-07T00:50:49.0102152Z 2025/09/07 00:32:42 [TRACE] Waiting 1m0s before next try
2025-09-07T00:50:49.0102511Z 2025/09/07 00:33:42 [TRACE] Waiting 10s before next try
2025-09-07T00:50:49.0102860Z 2025/09/07 00:33:53 [TRACE] Waiting 1m0s before next try
2025-09-07T00:50:49.0103200Z 2025/09/07 00:34:53 [TRACE] Waiting 10s before next try
2025-09-07T00:50:49.0103551Z 2025/09/07 00:35:03 [TRACE] Waiting 1m0s before next try
2025-09-07T00:50:49.0103891Z 2025/09/07 00:36:03 [TRACE] Waiting 10s before next try
2025-09-07T00:50:49.0104229Z 2025/09/07 00:36:13 [TRACE] Waiting 1m0s before next try
2025-09-07T00:50:49.0104562Z 2025/09/07 00:37:14 [TRACE] Waiting 10s before next try
2025-09-07T00:50:49.0104903Z 2025/09/07 00:37:24 [TRACE] Waiting 1m0s before next try
2025-09-07T00:50:49.0105529Z 2025/09/07 00:38:24 [TRACE] Waiting 10s before next try
2025-09-07T00:50:49.0106100Z 2025/09/07 00:38:34 [TRACE] Waiting 1m0s before next try
2025-09-07T00:50:49.0106449Z 2025/09/07 00:39:35 [TRACE] Waiting 10s before next try
2025-09-07T00:50:49.0106810Z 2025/09/07 00:39:45 [TRACE] Waiting 1m0s before next try
2025-09-07T00:50:49.0107156Z 2025/09/07 00:40:45 [TRACE] Waiting 10s before next try
2025-09-07T00:50:49.0107500Z 2025/09/07 00:40:55 [TRACE] Waiting 1m0s before next try
2025-09-07T00:50:49.0137440Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-09-07T00:50:49.0236293Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-09-07T00:50:49.0236907Z     resource_stream_connection_migration_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:50:49.0237354Z         
2025-09-07T00:50:49.0237636Z         Error: error creating resource
2025-09-07T00:50:49.0237901Z         
2025-09-07T00:50:49.0238241Z           with mongodbatlas_stream_connection.test,
2025-09-07T00:50:49.0238894Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-09-07T00:50:49.0239498Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-07T00:50:49.0239816Z         
2025-09-07T00:50:49.0240579Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections
2025-09-07T00:50:49.0241416Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-07T00:50:49.0242017Z         Detail: Stream instance for project 68bcd1d5df5af52d2d4d5831 and name
2025-09-07T00:50:49.0242621Z         test-acc-tf-s-4047930990064627307 not found. Reason: Not Found. Params:
2025-09-07T00:50:49.0243188Z         [68bcd1d5df5af52d2d4d5831 test-acc-tf-s-4047930990064627307],
2025-09-07T00:50:49.0243582Z         BadRequestDetail: 
2025-09-07T00:50:49.0243913Z --- FAIL: TestMigStreamRSStreamConnection_cluster (736.53s)
```

- 2025-09-08
  - PASS 14 minutes
  - FAIL 12 minutes

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.3740068Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-09-08T09:53:42.3741208Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-5747279010391946286
2025-09-08T09:53:42.3742163Z 2025/09/08 09:33:05 [DEBUG] Waiting for state to become: [IDLE]
2025-09-08T09:53:42.3742800Z 2025/09/08 09:36:06 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.3743388Z 2025/09/08 09:37:08 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.3743976Z 2025/09/08 09:37:18 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.3744573Z 2025/09/08 09:38:19 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.3745161Z 2025/09/08 09:38:30 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.3745750Z 2025/09/08 09:39:31 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.3746335Z 2025/09/08 09:39:43 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.3747047Z 2025/09/08 09:40:44 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.3747637Z 2025/09/08 09:40:55 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.3748380Z 2025/09/08 09:41:56 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.3748972Z 2025/09/08 09:42:07 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.3749544Z 2025/09/08 09:43:09 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.3750123Z 2025/09/08 09:43:21 [TRACE] Waiting 1m0s before next try
2025-09-08T09:53:42.3750705Z 2025/09/08 09:44:23 [TRACE] Waiting 10s before next try
2025-09-08T09:53:42.3764799Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-09-08T09:53:42.3902131Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-09-08T09:53:42.3903194Z     resource_stream_connection_migration_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:53:42.3903970Z         
2025-09-08T09:53:42.3904441Z         Error: error creating resource
2025-09-08T09:53:42.3905118Z         
2025-09-08T09:53:42.3905706Z           with mongodbatlas_stream_connection.test,
2025-09-08T09:53:42.3906859Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-09-08T09:53:42.3908170Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-08T09:53:42.3908916Z         
2025-09-08T09:53:42.3910273Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-1822128021936268327/connections
2025-09-08T09:53:42.3911749Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:53:42.3912751Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:53:42.3913415Z         BadRequestDetail: 
2025-09-08T09:53:42.3913956Z --- FAIL: TestMigStreamRSStreamConnection_cluster (724.23s)
```

  - PASS 15 minutes
- 2025-09-09 PASS 17 minutes
- 2025-09-10 PASS 14 minutes
- 2025-09-11 PASS 13 minutes
- 2025-09-12
  - PASS 9 minutes
  - PASS 8 minutes
- 2025-09-13 PASS 14 minutes
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.7863666Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-09-14T00:45:38.7864429Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-6884393916474547818
2025-09-14T00:45:38.7865107Z 2025/09/14 00:29:23 [DEBUG] Waiting for state to become: [IDLE]
2025-09-14T00:45:38.7865574Z 2025/09/14 00:32:23 [TRACE] Waiting 1m0s before next try
2025-09-14T00:45:38.7865924Z 2025/09/14 00:33:23 [TRACE] Waiting 10s before next try
2025-09-14T00:45:38.7866383Z 2025/09/14 00:33:33 [TRACE] Waiting 1m0s before next try
2025-09-14T00:45:38.7866733Z 2025/09/14 00:34:33 [TRACE] Waiting 10s before next try
2025-09-14T00:45:38.7867165Z 2025/09/14 00:34:43 [TRACE] Waiting 1m0s before next try
2025-09-14T00:45:38.7867497Z 2025/09/14 00:35:43 [TRACE] Waiting 10s before next try
2025-09-14T00:45:38.7867917Z 2025/09/14 00:35:54 [TRACE] Waiting 1m0s before next try
2025-09-14T00:45:38.7868561Z 2025/09/14 00:36:54 [TRACE] Waiting 10s before next try
2025-09-14T00:45:38.7869288Z 2025/09/14 00:37:04 [TRACE] Waiting 1m0s before next try
2025-09-14T00:45:38.7900665Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-09-14T00:45:38.8016749Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-09-14T00:45:38.8017365Z     resource_stream_connection_migration_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8017814Z         
2025-09-14T00:45:38.8018200Z         Error: error creating resource
2025-09-14T00:45:38.8018465Z         
2025-09-14T00:45:38.8018798Z           with mongodbatlas_stream_connection.test,
2025-09-14T00:45:38.8019439Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-09-14T00:45:38.8020042Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-14T00:45:38.8020359Z         
2025-09-14T00:45:38.8021112Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections
2025-09-14T00:45:38.8021929Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8022512Z         Detail: Stream instance for project 68c60c43d444485797b214ed and name
2025-09-14T00:45:38.8023115Z         test-acc-tf-s-1571941844326212806 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8023671Z         [68c60c43d444485797b214ed test-acc-tf-s-1571941844326212806],
2025-09-14T00:45:38.8024053Z         BadRequestDetail: 
2025-09-14T00:45:38.8024389Z --- FAIL: TestMigStreamRSStreamConnection_cluster (524.06s)
```

- 2025-09-15
  - PASS 9 minutes
  - PASS 8 minutes
  - FAIL 8 minutes

### Error 2025-09-15T06:36:27+00:00
```
2025-09-15T06:36:27.9993034Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-09-15T06:36:27.9994253Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-5280400626858073909
2025-09-15T06:36:27.9995293Z 2025/09/15 06:21:31 [DEBUG] Waiting for state to become: [IDLE]
2025-09-15T06:36:27.9996136Z 2025/09/15 06:24:31 [TRACE] Waiting 1m0s before next try
2025-09-15T06:36:27.9996781Z 2025/09/15 06:25:31 [TRACE] Waiting 10s before next try
2025-09-15T06:36:27.9997410Z 2025/09/15 06:25:41 [TRACE] Waiting 1m0s before next try
2025-09-15T06:36:27.9998040Z 2025/09/15 06:26:42 [TRACE] Waiting 10s before next try
2025-09-15T06:36:27.9998661Z 2025/09/15 06:26:52 [TRACE] Waiting 1m0s before next try
2025-09-15T06:36:27.9999285Z 2025/09/15 06:27:52 [TRACE] Waiting 10s before next try
2025-09-15T06:36:27.9999913Z 2025/09/15 06:28:02 [TRACE] Waiting 1m0s before next try
2025-09-15T06:36:28.0000531Z 2025/09/15 06:29:02 [TRACE] Waiting 10s before next try
2025-09-15T06:36:28.0001502Z 2025/09/15 06:29:12 [TRACE] Waiting 1m0s before next try
2025-09-15T06:36:28.0054115Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-09-15T06:36:28.0216391Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-09-15T06:36:28.0217154Z     resource_stream_connection_migration_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0217736Z         
2025-09-15T06:36:28.0218025Z         Error: error creating resource
2025-09-15T06:36:28.0218385Z         
2025-09-15T06:36:28.0218766Z           with mongodbatlas_stream_connection.test,
2025-09-15T06:36:28.0219565Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-09-15T06:36:28.0220308Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-15T06:36:28.0220625Z         
2025-09-15T06:36:28.0221536Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections
2025-09-15T06:36:28.0222605Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0223233Z         Detail: Stream instance for project 68c7b04bfe60767b7f9b139f and name
2025-09-15T06:36:28.0223952Z         test-acc-tf-s-5005804337291291222 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0224658Z         [68c7b04bfe60767b7f9b139f test-acc-tf-s-5005804337291291222],
2025-09-15T06:36:28.0225168Z         BadRequestDetail: 
2025-09-15T06:36:28.0225706Z --- FAIL: TestMigStreamRSStreamConnection_cluster (524.50s)
```

- 2025-09-16 PASS 11 minutes
- 2025-09-17 PASS 12 minutes
- 2025-09-18 PASS 14 minutes
- 2025-09-19 PASS 11 minutes
- 2025-09-20 PASS 12 minutes
- 2025-09-21 PASS 11 minutes
- 2025-09-22 PASS 11 minutes
- 2025-09-23 PASS 11 minutes
- 2025-09-24 PASS 12 minutes
- 2025-09-25 PASS 12 minutes
- 2025-09-26 PASS 12 minutes
- 2025-09-27 PASS 11 minutes
- 2025-09-28 PASS 11 minutes
- 2025-09-29
  - PASS 11 minutes
  - PASS 8 minutes
- 2025-09-30
  - PASS 10 minutes
  - PASS 9 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - FAIL 5 minutes

### Error 2025-09-30T15:25:09+00:00
```
2025-09-30T15:25:09.1993555Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-09-30T15:25:09.1996490Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-6305867375727321188
2025-09-30T15:25:09.1997400Z 2025/09/30 15:06:44 [DEBUG] Waiting for state to become: [IDLE]
2025-09-30T15:25:09.1998049Z 2025/09/30 15:09:44 [TRACE] Waiting 1m0s before next try
2025-09-30T15:25:09.1998622Z 2025/09/30 15:10:44 [TRACE] Waiting 10s before next try
2025-09-30T15:25:09.1999274Z 2025/09/30 15:10:55 [TRACE] Waiting 1m0s before next try
2025-09-30T15:25:09.2000164Z     resource_stream_connection_migration_test.go:17: 
2025-09-30T15:25:09.2001604Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:47
2025-09-30T15:25:09.2004754Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:135
2025-09-30T15:25:09.2007398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:189
2025-09-30T15:25:09.2009581Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2025-09-30T15:25:09.2010438Z         	Error:      	Received unexpected error:
2025-09-30T15:25:09.2012060Z         	            	Get "https://cloud-qa.mongodb.com/api/atlas/v2/groups/68dbf200a072243c859d3e8e/clusters/test-acc-tf-c-6305867375727321188": dial tcp: lookup cloud-qa.mongodb.com: i/o timeout
2025-09-30T15:25:09.2012965Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2025-09-30T15:25:09.2014676Z         	Messages:   	Cluster creation failed: test-acc-tf-c-6305867375727321188, err: Get "https://cloud-qa.mongodb.com/api/atlas/v2/groups/68dbf200a072243c859d3e8e/clusters/test-acc-tf-c-6305867375727321188": dial tcp: lookup cloud-qa.mongodb.com: i/o timeout
2025-09-30T15:25:09.2015760Z --- FAIL: TestMigStreamRSStreamConnection_cluster (316.80s)
```

- 2025-10-01
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 8 minutes
  - PASS 10 minutes
  - PASS 8 minutes
- 2025-10-02 PASS 8 minutes