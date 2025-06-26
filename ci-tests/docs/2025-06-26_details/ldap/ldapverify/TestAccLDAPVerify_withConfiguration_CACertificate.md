# ldap/ldapverify/TestAccLDAPVerify_withConfiguration_CACertificate Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 3 minutes
```
2025-05-28T01:02:44.8985545Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-05-28T01:02:44.8986559Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.10s)
```
#### PASS 3 minutes
```
2025-05-28T09:00:12.2246141Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-05-28T09:00:12.2247070Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.87s)
```
### 2025-05-29
#### PASS 3 minutes
```
2025-05-29T00:57:40.5099256Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-05-29T00:57:40.5099938Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.51s)
```
### 2025-05-30
#### PASS 3 minutes
```
2025-05-30T00:59:28.9128798Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-05-30T00:59:28.9129968Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.07s)
```
### 2025-05-31
#### PASS 3 minutes
```
2025-05-31T00:58:30.3943144Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-05-31T00:58:30.3943728Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.53s)
```
### 2025-06-01
#### PASS 3 minutes
```
2025-06-01T01:02:36.5223175Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-01T01:02:36.5223756Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.86s)
```
#### PASS 3 minutes
```
2025-06-01T05:10:45.0164065Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-01T05:10:45.0164688Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.87s)
```
#### PASS 3 minutes
```
2025-06-01T09:20:12.7004267Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-01T09:20:12.7005202Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.68s)
```
#### PASS 3 minutes
```
2025-06-01T13:30:09.4360435Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-01T13:30:09.4361134Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.61s)
```
#### PASS 3 minutes
```
2025-06-01T17:37:11.2704579Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-01T17:37:11.2705295Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.72s)
```
#### PASS 3 minutes
```
2025-06-01T21:46:44.9997268Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-01T21:46:44.9998243Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.67s)
```
### 2025-06-02
#### PASS 3 minutes
```
2025-06-02T01:01:50.3291561Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-02T01:01:50.3292248Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.55s)
```
#### PASS 3 minutes
```
2025-06-02T01:57:33.5983864Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-02T01:57:33.5985417Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.58s)
```
#### PASS 3 minutes
```
2025-06-02T06:12:31.7248665Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-02T06:12:31.7249568Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.96s)
```
### 2025-06-03
#### PASS 3 minutes
```
2025-06-03T01:00:19.4591968Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-03T01:00:19.4592932Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.77s)
```
### 2025-06-04
#### PASS 3 minutes
```
2025-06-04T00:51:06.7154599Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-04T00:51:06.7155526Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.49s)
```
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:38:18.0690637Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-05T00:38:18.0691344Z     resource_ldap_verify_test.go:32: Creating execution cluster: test-acc-tf-c-441783696565772095
2025-06-05T00:38:18.0691932Z 2025/06/05 00:34:47 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T00:38:18.0692769Z     resource_ldap_verify_test.go:32: 
2025-06-05T00:38:18.0693810Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T00:38:18.0695692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T00:38:18.0698253Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2025-06-05T00:38:18.0699139Z         	Error:      	Received unexpected error:
2025-06-05T00:38:18.0701673Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9c939f274132504a2/clusters/test-acc-tf-c-441783696565772095 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:18.0703492Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-05T00:38:18.0705733Z         	Messages:   	Cluster creation failed: test-acc-tf-c-441783696565772095, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9c939f274132504a2/clusters/test-acc-tf-c-441783696565772095 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:18.0707267Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (180.81s)
```
### 2025-06-06
#### PASS 3 minutes
```
2025-06-06T00:52:40.1096934Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-06T00:52:40.1097796Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.69s)
```
### 2025-06-07
#### PASS 3 minutes
```
2025-06-07T00:50:13.5480150Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-07T00:50:13.5481096Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.50s)
```
### 2025-06-08
#### PASS 3 minutes
```
2025-06-08T00:54:05.0991942Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-08T00:54:05.0992923Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.43s)
```
### 2025-06-09
#### PASS 3 minutes
```
2025-06-09T00:52:04.4275200Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-09T00:52:04.4276206Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.74s)
```
### 2025-06-10
#### PASS 3 minutes
```
2025-06-10T01:02:56.2199130Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-10T01:02:56.2199729Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.60s)
```
### 2025-06-11
#### PASS 3 minutes
```
2025-06-11T00:50:04.8260709Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-11T00:50:04.8282414Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.45s)
```
#### PASS 3 minutes
```
2025-06-11T08:00:12.2447512Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-11T08:00:12.2448419Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.64s)
```
### 2025-06-12
#### PASS 3 minutes
```
2025-06-12T00:49:00.2530829Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-12T00:49:00.2531944Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.87s)
```
### 2025-06-13
#### PASS 3 minutes
```
2025-06-13T00:49:53.4067375Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-13T00:49:53.4068065Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.53s)
```
### 2025-06-14
#### PASS 3 minutes
```
2025-06-14T00:52:07.3842731Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-14T00:52:07.3843607Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.69s)
```
### 2025-06-15
#### PASS 3 minutes
```
2025-06-15T00:54:39.9560460Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-15T00:54:39.9561092Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.46s)
```
### 2025-06-16
#### PASS 3 minutes
```
2025-06-16T00:52:04.5421579Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-16T00:52:04.5422104Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.50s)
```
### 2025-06-17
#### PASS 3 minutes
```
2025-06-17T00:51:15.5093142Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-17T00:51:15.5094060Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (183.01s)
```
### 2025-06-18
#### PASS 3 minutes
```
2025-06-18T00:49:39.4280696Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-18T00:49:39.4281883Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.79s)
```
### 2025-06-19
#### PASS 3 minutes
```
2025-06-19T00:51:55.0596120Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-19T00:51:55.0596670Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.37s)
```
### 2025-06-20
#### PASS 3 minutes
```
2025-06-20T00:50:55.5812875Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-20T00:50:55.5813503Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.90s)
```
### 2025-06-21
#### PASS 3 minutes
```
2025-06-21T00:50:04.2799746Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-21T00:50:04.2800297Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.55s)
```
### 2025-06-22
#### PASS 3 minutes
```
2025-06-22T00:54:53.6832074Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-22T00:54:53.6832971Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.53s)
```
### 2025-06-23
#### PASS 3 minutes
```
2025-06-23T00:51:54.0902601Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-23T00:51:54.0903515Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.74s)
```
### 2025-06-24
#### PASS 3 minutes
```
2025-06-24T00:50:33.4279626Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-24T00:50:33.4280642Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (182.10s)
```
### 2025-06-25
#### PASS 3 minutes
```
2025-06-25T00:51:43.4898013Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-25T00:51:43.4898914Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.62s)
```
### 2025-06-26
#### PASS 3 minutes
```
2025-06-26T00:50:42.4122658Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2025-06-26T00:50:42.4123549Z --- PASS: TestAccLDAPVerify_withConfiguration_CACertificate (181.81s)
```